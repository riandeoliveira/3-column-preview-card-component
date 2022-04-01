import theme from "../theme/theme.json";
import { createGlobalStyle } from "styled-components";

const { fonts } = theme;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${fonts.primary}, ${fonts.neutral};
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
