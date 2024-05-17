import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from '@emotion/react';
import { theme, GlobalStyle } from '@/styles';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <ToastContainer />
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
