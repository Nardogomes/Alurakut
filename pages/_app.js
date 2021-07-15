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
    background: url('https://s2.glbimg.com/uTq2s3bxuPBLB0wAYKPp4ea4cz4=/e.glbimg.com/og/ed/f/original/2019/12/16/galaxy-3608029_1920.jpg') no-repeat center center;
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
