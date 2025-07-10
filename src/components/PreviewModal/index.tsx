import { CloseIcon } from '@/assets';
import * as S from './style';

interface Props {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewModal = ({ setIsModal }: Props) => {
  const previewArray = [
    { title: '디즈니', img: '/images/디즈니preview.png' },
    { title: '마인크래프트', img: '/images/마인크래프트preview.png' },
    { title: '심슨', img: '/images/심슨preview.png' },
    { title: '스누피', img: '/images/스누피preview.png' },
    { title: '레고', img: '/images/레고preview.png' },
  ];

  return (
    <S.Continer>
      <S.ModalBox>
        <S.ModalHeader>
          <S.ModalTitle>AI 스타일 예시💡</S.ModalTitle>
          <div onClick={() => setIsModal(false)}>
            <CloseIcon />
          </div>
        </S.ModalHeader>
        <S.ModalExplanate>
          각 프롬프트에 따라 다른 스타일로 AI 이미지가 생성됩니다!
        </S.ModalExplanate>
        <S.PreviewBox>
          {previewArray.map((x) => {
            return (
              <S.ImageBox key={x.title}>
                <S.ModalTitle>{x.title}</S.ModalTitle>
                <S.Image src={x.img} />
              </S.ImageBox>
            );
          })}
        </S.PreviewBox>
      </S.ModalBox>
    </S.Continer>
  );
};

export default PreviewModal;
