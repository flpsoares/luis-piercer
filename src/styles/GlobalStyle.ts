import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    font-family: 'Exo 2', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--dark);
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

  .rec-dot {
    background-color: transparent !important;
    opacity: 50% !important;
    box-shadow: 0 0 1px 3px var(--primary) !important;
  }

  .rec-dot_active {
    background-color: white !important;
    opacity: 100% !important;
    box-shadow: 0 0 1px 3px var(--primary) !important;
  }

  .rec.rec-arrow {
    background: transparent !important;
  }

  .rec.rec-arrow:hover {
    background: var(--primary) !important;
    color: white !important;
  }

  .rec.rec-arrow:hover:disabled, .rec.rec-arrow:focus:disabled {
    background: transparent !important;
    color: transparent !important;
  }
`
