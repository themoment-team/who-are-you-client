import styled from '@emotion/styled';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  padding-top: 5rem;
  width: 31.75rem;
  height: 37.5rem;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: space-between;
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
`;

export const ButtonWrapper = styled.div`
  margin-top: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
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
