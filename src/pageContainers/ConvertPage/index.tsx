import { Flow, SelectedType } from '@/types';
import * as S from './style';
import YesOrNoButton from '@/components/YesOrNoButton';
import { useState } from 'react';

interface Props {
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
  image: string;
}

const ConvertPage: React.FC<Props> = ({ image, setFlow }) => {
  const [selectedButton, setSelectedButton] = useState<SelectedType | null>(
    null
  );

  const handleShotButtonClick = () => {
    // setFlow();
  };

  return (
    <S.Container>
      <S.Description>
        촬영하신 사진을
        <br />
        AI로 변환하시겠습니까?
      </S.Description>
      <YesOrNoButton
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <S.ButtonBox>
        <S.PreviewButton>미리보기</S.PreviewButton>
        <S.ShotButton onClick={handleShotButtonClick}>사진촬영</S.ShotButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default ConvertPage;
