import theme from "./theme/theme.json";
import styled from "styled-components";
import devices from "./theme/devices";

const { colors } = theme;

export const AppContainer = styled.div`
  display: flex;
  margin: 10px;

  .card-1 {
    animation: slide-card-1 1s;
    background-color: ${colors["zest:"]};
    border-radius: 10px 0 0 10px;
  }

  .card-2 {
    background-color: ${colors["mosque:"]};
  }

  .card-3 {
    animation: slide-card-3 1s;
    background-color: ${colors["cyprus:"]};
    border-radius: 0 10px 10px 0;
  }

  @media ${devices.laptop} {
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
