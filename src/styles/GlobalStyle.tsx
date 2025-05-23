import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}

      *, body {
        font-family:
          'Pretendard Variable',
          Pretendard,
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          sans-serif;
      }

      html {
        @media (max-width: 599px) {
          font-size: 15px;
        }
        @media (max-width: 530px) {
          font-size: 14px;
        }
        @media (max-width: 490px) {
          font-size: 13px;
        }
        @media (max-width: 460px) {
          font-size: 12px;
        }
        @media (max-width: 420px) {
          font-size: 11px;
        }
        @media (max-width: 390px) {
          font-size: 10px;
        }
        @media (max-width: 350px) {
          font-size: 9px;
        }
        @media (max-width: 320px) {
          font-size: 8px;
        }
      }

      body {
        background: #f7f7f7;
        height: 100vh;
        height: 100dvh;
        overscroll-behavior-y: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        padding: 0;
        border: none;
        outline: none;
        background: inherit;
        cursor: pointer;
      }

      @font-face {
        font-family: 'GmarketSans';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
          format('woff');
        font-weight: 400;
        font-style: normal;
      }
    `}
  />
);

export default GlobalStyle;
