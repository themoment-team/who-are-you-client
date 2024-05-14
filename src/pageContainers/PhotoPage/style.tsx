import styled from '@emotion/styled';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Description = styled.h1`
  ${({ theme }) => theme.typo.title};
  color: ${({ theme }) => theme.color.gray[90]};
  font-weight: bold;
  margin: 2.5rem 0 2.25rem 0;
  width: 32.7rem;
`;

export const WebcamWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  video {
    width: 32.75rem;
    border-radius: 0.5rem;
    /* height: 26.1875rem; */
  }
`;

export const ButtonBox = styled.div`
  width: 32.75rem;
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  position: absolute;
  bottom: 2.5rem;
`;

export const ShotButton = styled.button`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary[30]};
  font-weight: 500;
  border-radius: 0.5rem;
  width: 7.875rem;
  height: 3rem;
`;

export const PreviewButton = styled(ShotButton)`
  color: ${({ theme }) => theme.color.primary[30]};
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.primary[30]};
`;
