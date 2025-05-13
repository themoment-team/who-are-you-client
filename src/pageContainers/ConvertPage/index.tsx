import { Flow, SelectedType } from '@/types';
import * as S from './style';
import { useState } from 'react';
import { toast } from 'react-toastify';
import OpenAI from 'openai';
import { PromptSelector, YesOrNoButton } from '@/components';
import { PromptType } from '@/types/promptType';

interface Props {
  imageUrl: string;
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
  selectedButton: SelectedType | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<SelectedType | null>>;
  convertedImageUrl: string;
  setConvertedImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ConvertPage: React.FC<Props> = ({
  imageUrl,
  setFlow,
  selectedButton,
  setSelectedButton,
  convertedImageUrl,
  setConvertedImageUrl,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPrompt, setSelectedPrompt] =
    useState<keyof PromptType>('디즈니');

  const prompt: PromptType = {
    디즈니: `Transform this character into a classic Disney style, with large, round, expressive eyes and a soft, endearing expression. The character should have a smooth, clean look with refined, youthful facial features. Focus on creating a **2D hand-drawn feel** with bright, bold, and vibrant colors. The character’s hair should be stylized with **fluid curves**, and their clothing should have intricate details, reminiscent of Disney princesses or heroes, such as flowing dresses or regal suits. The design should avoid any 3D effects or realistic shading, sticking to **flat 2D animation**. The background should reflect a **magical, dreamy atmosphere**, such as a fantasy castle or lush garden, to capture the enchanted Disney world. Ensure that the overall aesthetic is **timeless, whimsical, and full of wonder**, like the characters from *Beauty and the Beast*, *The Little Mermaid*, or *The Jungle Book*.`,
    마인크래프트: `Convert this image into Minecraft style: voxel art, pixelated blocks, low resolution textures, cubic shapes, blocky environment, bright lighting, 2D Minecraft aesthetic.`,
    스누피: `A close-up cartoon portrait of a human character reimagined in the style of Peanuts comics (Snoopy style). Use very simple black line art, round head shapes, dot eyes, a small nose, and minimal facial detail. Flat colors with no shading or texture. Keep the expression friendly and innocent. Background should be plain or light-colored. Avoid realism and 3D elements; emphasize the charm of old-school newspaper comic strip style.`,
    심슨: `Convert this person into a character in *The Simpsons* TV show. Use flat 2D cartoon style with thick black outlines and a limited color palette. The character must have bright yellow skin, large round white eyes with black pupils, a wide overbite, and a comically exaggerated facial expression. Style the hair in blocky or spiky cartoon shapes. Use only flat shading — no gradients or 3D effects. Ensure the character looks like it belongs in a screenshot from The Simpsons, standing in Springfield with the show’s signature humor and satirical American cartoon vibe. No realism, no anime, no webtoon — only classic Simpsons art style.`,
    레고: `"A scene in LEGO style: made of colorful plastic bricks, blocky shapes with visible studs, glossy plastic texture, modular toy design, bright primary colors, highly detailed, resembling LEGO minifigures and LEGO structures`,
  };

  const handleNextButtonClick = () => {
    if (selectedButton === null)
      return toast.error('예, 아니오 중 하나를 선택해 주셔야해요.');

    if (
      (selectedButton === SelectedType.YES && !isLoading) ||
      selectedButton === SelectedType.NO
    )
      setFlow(Flow.SELECT_THEME_FLOW);
    else {
      return toast.error('아직 변환된 사진이 로딩되지 않았습니다');
    }
  };

  const handleModalButtonClick = () => setIsModal(false);
  const handlePreviewButtonClick = () => {
    if (selectedButton !== null) {
      convertImage();
      setIsModal(true);
    } else {
      toast.error('예, 아니요 중 하나를 선택해 주셔야해요.');
    }
  };

  const convertImage = async () => {
    setIsLoading(true);
    const response = await postConvertedImage();
    setConvertedImageUrl(response);
    setIsLoading(false);
  };

  const handleBackButtonClick = () => setFlow(Flow.PHOTO_FLOW);

  const handlePromptClick = (promptText: keyof PromptType) => {
    setSelectedPrompt(promptText);
  };

  const postConvertedImage = async () => {
    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const visionResponse = await openai.chat.completions.create({
        model: 'chatgpt-4o-latest',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Please describe this picture in English in great detail, without using markdown. Especially focus on the build and gender.',
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageUrl,
                },
              },
            ],
          },
        ],
        max_tokens: 1000,
      });

      const imageDescription = visionResponse.choices[0]?.message.content;

      const img = await openai.images.generate({
        model: 'dall-e-3',
        prompt: `${prompt[selectedPrompt]} this style: ${imageDescription}`,
        n: 1,
        size: '1024x1024',
      });

      const url = img.data && img.data[0]?.url ? img.data[0].url : '';
      return url;
    } catch (err) {
      toast.error('이미지 변환 중 오류가 발생했습니다.');
      return '';
    }
  };

  return (
    <S.Container>
      <S.TopBox>
        <S.Description>
          촬영하신 사진을
          <br />
          AI로 변환하시겠습니까?
        </S.Description>
        <S.Image src={imageUrl} />
      </S.TopBox>
      <YesOrNoButton
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === SelectedType.YES && (
        <PromptSelector
          selectedPrompt={selectedPrompt}
          handlePromptClick={handlePromptClick}
        />
      )}
      <S.ButtonBox>
        <S.BackButton onClick={handleBackButtonClick}>다시찍기</S.BackButton>
        <S.ButtonWrapper>
          <S.PreviewButton onClick={handlePreviewButtonClick}>
            미리보기
          </S.PreviewButton>
          <S.NextButton onClick={handleNextButtonClick}>다음으로</S.NextButton>
        </S.ButtonWrapper>
      </S.ButtonBox>
      {isModal && (
        <S.PreviewModal>
          <S.ModalBox>
            <S.ImgWrapper>
              {isLoading && selectedButton === SelectedType.YES ? (
                <S.LoadingSpinner />
              ) : (
                <S.ModalImg
                  src={
                    selectedButton === SelectedType.YES
                      ? convertedImageUrl!
                      : imageUrl
                  }
                />
              )}
            </S.ImgWrapper>
            <S.ModalButton onClick={handleModalButtonClick}>확인</S.ModalButton>
          </S.ModalBox>
        </S.PreviewModal>
      )}
    </S.Container>
  );
};

export default ConvertPage;
