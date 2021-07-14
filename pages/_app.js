import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #D9E6f6;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: url('https://lh3.googleusercontent.com/proxy/IRauV7MvJFVbanzVWapuczkSIoyYKKJC_rB86hfC9P8cJxORW-vh6nwbqOLnETjfh8-YM72LQrUWKw0zbAP6_KyjSmGZy8jBNSvaoV61dBACeswYUl_JZ3nzAlYgoPjpZncc3sAB') no-repeat center center;
    background-size: cover;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
