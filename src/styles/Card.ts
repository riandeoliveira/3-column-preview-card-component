import theme from "./theme/theme.json";
import styled from "styled-components";
import devices from "./theme/devices";

const { colors, fonts } = theme;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  justify-content: space-between;
  max-width: 290px;
  padding: 40px;

  .btn-1 {
    color: ${colors["zest:"]};
  }

  .btn-2 {
    color: ${colors["mosque:"]};
  }

  .btn-3 {
    color: ${colors["cyprus:"]};
  }

  @media ${devices.laptop} {
    height: 420px;
  }
`;

export const CarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarImage = styled.img`
  align-self: baseline;
`;

export const CarName = styled.h1`
  color: ${colors["concrete:"]};
  font-family: ${fonts.secondary};
  font-size: 36px;
  margin: 30px 0;
  text-transform: uppercase;
`;

export const CarDescription = styled.p`
  color: ${colors["ebb:"]};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6em;
`;

export const Button = styled.button`
  background-color: ${colors["concrete:"]};
  border-radius: 30px;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 500;
  padding: 12px 30px;
  place-self: flex-start;
  transition: all 0.2s linear;

  &:hover {
    background-color: transparent;
    border-color: ${colors["concrete:"]};
    color: ${colors["concrete:"]};
  }

  &:active {
    transform: scale(0.8);
  }
`;
