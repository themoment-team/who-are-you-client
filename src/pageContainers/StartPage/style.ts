import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3.85rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
`;

export const TextWrapper = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const IntroduceBorder = styled.div`
  width: 16rem;
  height: 3rem;
  border: 1px solid #0b1140;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const IntroduceText = styled.h1`
  color: #0b1140;
  text-align: center;
  font-family: 'GmarketSans', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;
  letter-spacing: -0.05rem;
`;

export const Text = styled.div`
  color: #0b1140;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.04rem;
  margin-top: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  width: 7.875rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #6052ff;
  color: #6052ff;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem;
`;
