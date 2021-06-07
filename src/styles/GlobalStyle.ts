import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  button, input {
    background: 0;
    border: 0;
  }

  :root {
    --primary: #E78D3C;
    --dark: #1f2125;
    --dark-header: #101010;
  }
`
