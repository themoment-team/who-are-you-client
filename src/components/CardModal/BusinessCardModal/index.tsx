import { ModalWrapper, Theme1, Theme2, Theme3 } from '@/components';
import * as S from './style';

import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

interface Props {
  closeModal: () => void;
  currentTheme: number;
}

const CardModal: React.FC<Props> = ({ closeModal, currentTheme }) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [isPrinting, setIsPringting] = useState(false);

  const selectedTheme = () => {
    switch (currentTheme) {
      case 1:
        return (
          <Theme1
            name={'김재균'}
            major={'Front-End'}
            phoneNumber={'01025590283'}
            email={'s23005@gsm.hs.kr'}
            mbti={'ESTP'}
            sns={'jxx_gyun'}
          />
        );
      case 2:
        return (
          <Theme2 name={''} phoneNumber={''} email={''} mbti={''} sns={''} />
        );
      case 3:
        return (
          <Theme3 name={''} phoneNumber={''} email={''} mbti={''} sns={''} />
        );
      default:
        return null;
    }
  };

  return (
    <ModalWrapper
      closeModal={closeModal}
      innerCss={css`
        border-radius: 1rem;
        padding: 1.5rem;
      `}
    >
      <S.CardContianier>
        <S.FinishMessageBox>
          <S.FinishMessage>
            {isPrinting
              ? '재균님의 명함이 인쇄되고 있어요 🖨️'
              : '명함이 완성되었어요 😆'}
          </S.FinishMessage>
          <S.PrintMessage>
            {isPrinting
              ? '잠시만 기다려주세요!'
              : '입력한 내용이 맞는지 확인하신 후 인쇄해보세요!'}
          </S.PrintMessage>
        </S.FinishMessageBox>
        <S.ImgBox>
          <div ref={printRef}>{selectedTheme()}</div>
        </S.ImgBox>

        <S.ButtonContainer>
          {isPrinting ? (
            <S.ShotButton
              onClick={() => {
                closeModal();
              }}
            >
              확인
            </S.ShotButton>
          ) : (
            <ReactToPrint
              trigger={() => (
                <S.ShotButton
                  onClick={() => {
                    setIsPringting(true);
                  }}
                >
                  인쇄하기
                </S.ShotButton>
              )}
              content={() => printRef.current}
            />
          )}
        </S.ButtonContainer>
      </S.CardContianier>
    </ModalWrapper>
  );
};

export default CardModal;
