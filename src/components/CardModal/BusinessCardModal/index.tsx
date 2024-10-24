import { ModalWrapper, Theme1, Theme2, Theme3 } from '@/components';
import * as S from './style';
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { userInfoFormType } from '@/types';
import { formatPhoneNumber, isValidMBTI } from '@/utils';

interface Props {
  closeModal: () => void;
  currentTheme: number;
  userInfo: userInfoFormType | null;
  imageUrl: string;
}

const CardModal: React.FC<Props> = ({
  closeModal,
  currentTheme,
  userInfo,
  imageUrl,
}) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const commonProps = {
    name: userInfo!.name,
    major: userInfo?.major || '',
    phoneNumber: userInfo?.phoneNumber
      ? formatPhoneNumber(userInfo.phoneNumber)
      : '',
    email: userInfo!.email,
    mbti:
      userInfo?.mbti && isValidMBTI(userInfo.mbti) ? userInfo.mbti : undefined,
    instagram: userInfo?.instagram || '',
    imageUrl: imageUrl,
  };

  const renderSingleCard = () => {
    switch (currentTheme) {
      case 1:
        return <Theme1 {...commonProps} />;
      case 2:
        return <Theme2 {...commonProps} />;
      case 3:
        return <Theme3 {...commonProps} />;
      default:
        return null;
    }
  };

  const renderMultipleCards = () => {
    const count = currentTheme === 2 ? 12 : 10;
    const cards = [];
    for (let i = 0; i < count; i++) {
      switch (currentTheme) {
        case 1:
          cards.push(<Theme1 key={i} {...commonProps} />);
          break;
        case 2:
          cards.push(<Theme2 key={i} {...commonProps} />);
          break;
        case 3:
          cards.push(<Theme3 key={i} {...commonProps} />);
          break;
        default:
          return null;
      }
    }
    return cards;
  };

  return (
    <ModalWrapper
      closeModal={closeModal}
      innerCss={css`
        border-radius: 1rem;
        padding: 1.5rem;
      `}
    >
      <S.CardContainer>
        <S.FinishMessageBox>
          <S.FinishMessage>
            {isPrinting
              ? `${commonProps.name}님의 명함이 인쇄되고 있어요 🖨️`
              : '명함이 완성되었어요 😆'}
          </S.FinishMessage>
          <S.PrintMessage>
            {isPrinting
              ? '잠시만 기다려주세요!'
              : '입력한 내용이 맞는지 확인하신 후 인쇄해보세요!'}
          </S.PrintMessage>
        </S.FinishMessageBox>
        <S.ImgBox themeType={currentTheme}>{renderSingleCard()}</S.ImgBox>

        <S.ButtonContainer>
          {isPrinting ? (
            <S.ShotButton onClick={closeModal}>확인</S.ShotButton>
          ) : (
            <ReactToPrint
              trigger={() => (
                <S.ShotButton
                  onClick={() => {
                    setIsPrinting(true);
                  }}
                >
                  인쇄하기
                </S.ShotButton>
              )}
              content={() => printRef.current}
              onBeforePrint={() => setIsPrinting(true)}
              onAfterPrint={() => {
                setIsPrinting(false);
              }}
            />
          )}
        </S.ButtonContainer>
      </S.CardContainer>
      <div style={{ display: 'none' }}>
        <S.ImgBox ref={printRef} themeType={currentTheme}>
          {renderMultipleCards()}
        </S.ImgBox>
      </div>
    </ModalWrapper>
  );
};

export default CardModal;
