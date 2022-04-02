import { createGlobalStyle } from "styled-components";
import theme from "../theme/theme.json";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${theme.fonts.primary}, ${theme.fonts.neutral};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  html {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100%;
  }
`;

export default GlobalStyle;
