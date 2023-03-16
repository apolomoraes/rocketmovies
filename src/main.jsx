import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global'
import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
