import { OIcon, XIcon } from '@/assets';
import * as S from './style';
import { SelectedType } from '@/types';

interface Props {
  selectedButton: SelectedType | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<SelectedType | null>>;
}

const YesOrNoButton: React.FC<Props> = ({
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <S.YesOrNoBox>
      <S.Button
        onClick={() => setSelectedButton(SelectedType.YES)}
        isSelected={selectedButton === SelectedType.YES}
      >
        <OIcon />
        <span>
          네,
          <div>변환할게요!</div>
        </span>
      </S.Button>
      <S.Button
        onClick={() => setSelectedButton(SelectedType.NO)}
        isSelected={selectedButton === SelectedType.NO}
      >
        <XIcon />
        <span>
          아니요,
          <div>그대로 인쇄할게요!</div>
        </span>
      </S.Button>
    </S.YesOrNoBox>
  );
};

export default YesOrNoButton;
