import * as S from './style';

interface Props {
  selectedPrompt: string;
  handlePromptClick: (promptText: string) => void;
}

const prompts = [
  { text: '지브리' },
  { text: '마인크래프트' },
  { text: '진격의 거인' },
  { text: '심슨' },
  { text: '레고' },
];

const PromptSelector = ({ selectedPrompt, handlePromptClick }: Props) => {
  return (
    <S.Container>
      <S.Title>어떤 스타일로 변환하시겠습니까?</S.Title>
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
    </S.Container>
  );
};

export default PromptSelector;
