import styled from "styled-components";
import theme from "./theme/theme.json";
import device from "media-query-sizes";

const AppBox = styled.div`
  display: flex;
  margin: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    height: 480px;
    justify-content: space-between;
    max-width: 290px;
    padding: 40px;

    div {
      display: flex;
      flex-direction: column;

      img {
        align-self: baseline;
      }

      h1 {
        color: ${theme.colors.concrete};
        font-family: ${theme.fonts.secondary};
        font-size: 36px;
        margin: 30px 0;
        text-transform: uppercase;
      }

      p {
        color: ${theme.colors.ebb};
        font-size: 15px;
        font-weight: 300;
        line-height: 1.6em;
      }
    }

    button {
      background-color: ${theme.colors.concrete};
      border-radius: 30px;
      border: 2px solid transparent;
      cursor: pointer;
      font-weight: 500;
      padding: 12px 30px;
      place-self: flex-start;
      transition: all 0.2s linear;

      &:hover {
        background-color: transparent;
        border-color: ${theme.colors.concrete};
        color: ${theme.colors.concrete};
      }

      &:active {
        transform: scale(0.8);
      }
    }
  }

  .card-1 {
    animation: slide-card-1 1s;
    background-color: ${theme.colors.zest};
    border-radius: 10px 0 0 10px;

    button {
      color: ${theme.colors.zest};
    }
  }

  .card-2 {
    background-color: ${theme.colors.mosque};

    button {
      color: ${theme.colors.mosque};
    }
  }

  .card-3 {
    animation: slide-card-3 1s;
    background-color: ${theme.colors.cyprus};
    border-radius: 0 10px 10px 0;

    button {
      color: ${theme.colors.cyprus};
    }
  }

  @media ${device.laptop} {
    flex-direction: column;

    .card-1 {
      animation: fade-in 1s;
      border-radius: 10px 10px 0 0;
    }

    .card-2 {
      animation: fade-in 1s;
    }

    .card-3 {
      animation: fade-in 1s;
      border-radius: 0 0 10px 10px;
    }
  }
`;

export default AppBox;
