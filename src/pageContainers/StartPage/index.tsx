import { Flow } from '@/types';
import * as S from './style';
import { WRUText } from '@/assets';

interface Props {
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const StartPage: React.FC<Props> = ({ setFlow }) => {
  const handleStart = () => {
    setFlow(Flow.PHOTO_FLOW);
  };

  return (
    <S.Container>
      <S.Contents>
        <S.TextWrapper>
          <S.IntroduceBorder>
            <S.IntroduceText>AI 커스텀 명함 제작 서비스</S.IntroduceText>
          </S.IntroduceBorder>
          <WRUText />
          <S.Text>
            후아유 사용 가이드를 참고해서 나만의 AI 명함을 만들어보세요!
            <br />단 몇 단계만으로 세상에 하나뿐인 나만의 AI 명함이 완성돼요!
          </S.Text>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={handleStart}>시작하기</S.Button>
        </S.ButtonWrapper>
      </S.Contents>
    </S.Container>
  );
};

export default StartPage;
