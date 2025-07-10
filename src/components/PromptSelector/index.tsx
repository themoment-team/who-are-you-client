import { PromptType } from '@/types/promptType';
import * as S from './style';
import { useState } from 'react';
import PreviewModal from '../PreviewModal';

interface Props {
  selectedPrompt: keyof PromptType;
  handlePromptClick: (promptText: keyof PromptType) => void;
}

const prompts: { text: keyof PromptType }[] = [
  { text: '디즈니' },
  { text: '마인크래프트' },
  { text: '스누피' },
  { text: '심슨' },
  { text: '레고' },
];

const PromptSelector = ({ selectedPrompt, handlePromptClick }: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>어떤 스타일로 변환하시겠습니까?</S.Title>
        <S.PreviewBtn onClick={() => setIsModal(true)}>
          AI 스타일 예시
        </S.PreviewBtn>
      </S.TextContainer>
      <S.PromptContainer>
        {prompts.map((prompt, index) => (
          <S.Prompt
            key={index}
            isSelected={prompt.text === selectedPrompt}
            onClick={() => handlePromptClick(prompt.text)}
          >
            {prompt.text}
          </S.Prompt>
        ))}
      </S.PromptContainer>
      {isModal && <PreviewModal setIsModal={setIsModal} />}
    </S.Container>
  );
};

export default PromptSelector;
