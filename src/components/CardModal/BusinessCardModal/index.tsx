import { ModalWrapper, Theme1, Theme2, Theme3, Theme4 } from '@/components';
import * as S from './style';

import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { CardTheme, userInfoFormType } from '@/types';
import { formatPhoneNumber } from '@/utils';

interface Props {
  closeModal: () => void;
  currentTheme: CardTheme;
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
    imageUrl: imageUrl,
  };

  const selectedTheme = () => {
    switch (currentTheme) {
      case CardTheme.HorizontalMiddleLine:
        return <Theme1 {...commonProps} />;
      case CardTheme.HorizontalSideLine:
        return <Theme2 {...commonProps} />;
      case CardTheme.VerticalSquare:
        return <Theme3 {...commonProps} />;
      case CardTheme.VerticalCircular:
        return <Theme4 {...commonProps} />;
      default:
        return null;
    }
  };

  const isHorizontalTheme = (theme: CardTheme): boolean => {
    return (
      theme === CardTheme.HorizontalMiddleLine ||
      theme === CardTheme.HorizontalSideLine
    );
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
        <S.ImgBox ref={printRef} isHorizontal={isHorizontalTheme(currentTheme)}>
          {selectedTheme()}
          <S.PrintOnlyCard>{selectedTheme()}</S.PrintOnlyCard>
        </S.ImgBox>

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
              onAfterPrint={() => setIsPrinting(false)}
            />
          )}
        </S.ButtonContainer>
      </S.CardContainer>
    </ModalWrapper>
  );
};

export default CardModal;
