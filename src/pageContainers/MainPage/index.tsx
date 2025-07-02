import * as S from './style';
import {
  ConvertPage,
  FormPage,
  PhotoPage,
  SelectPage,
  StartPage,
} from '@/pageContainers';
import { useState } from 'react';
import { Flow, SelectedType, userInfoFormType } from '@/types';
import { Header } from '@/components';
import { type PromptType } from '@/types/promptType';
import { postConvertedImage } from '@/utils';

const MainPage = () => {
  const [flow, setFlow] = useState<Flow>(Flow.START_FLOW);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [userInfo, setUserInfo] = useState<userInfoFormType | null>(null);
  const [selectedButton, setSelectedButton] = useState<SelectedType | null>(
    null
  );
  const [convertedImageUrl, setConvertedImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedPrompt, setSelectedPrompt] =
    useState<keyof PromptType>('디즈니');

  const handleConvertImage = async () => {
    setConvertedImageUrl(await postConvertedImage(imageUrl, selectedPrompt));
    setIsLoading(false);
  };

  return (
    <S.Wrapper>
      {flow !== Flow.START_FLOW && <Header />}
      {flow === Flow.START_FLOW && <StartPage setFlow={setFlow} />}
      {flow === Flow.PHOTO_FLOW && (
        <PhotoPage setImageUrl={setImageUrl} setFlow={setFlow} />
      )}
      {flow === Flow.CONVERT_PHOTO_FLOW && (
        <ConvertPage
          imageUrl={imageUrl}
          setFlow={setFlow}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          convertedImageUrl={convertedImageUrl}
          selectedPrompt={selectedPrompt}
          setSelectedPrompt={setSelectedPrompt}
          handleConvertImage={handleConvertImage}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
      {flow === Flow.FORM_FLOW && (
        <FormPage
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setFlow={setFlow}
        />
      )}
      {flow === Flow.SELECT_THEME_FLOW && (
        <SelectPage
          userInfo={userInfo}
          imageUrl={imageUrl}
          selectedButton={selectedButton}
          convertedImageUrl={convertedImageUrl}
          isLoading={isLoading}
          setFlow={setFlow}
        />
      )}
    </S.Wrapper>
  );
};

export default MainPage;
