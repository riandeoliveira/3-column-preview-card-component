import styled from "styled-components";
import theme from "./theme/theme.json";
import devices from "./theme/devices";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  justify-content: space-between;
  max-width: 290px;
  padding: 40px;

  .btn-1 {
    color: ${theme.colors["zest:"]};
  }

  .btn-2 {
    color: ${theme.colors["mosque:"]};
  }

  .btn-3 {
    color: ${theme.colors["cyprus:"]};
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
  color: ${theme.colors["concrete:"]};
  font-family: ${theme.fonts.secondary};
  font-size: 36px;
  margin: 30px 0;
  text-transform: uppercase;
`;

export const CarDescription = styled.p`
  color: ${theme.colors["ebb:"]};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6em;
`;

export const Button = styled.button`
  background-color: ${theme.colors["concrete:"]};
  border-radius: 30px;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 500;
  padding: 12px 30px;
  place-self: flex-start;
  transition: all 0.2s linear;

  &:hover {
    background-color: transparent;
    border-color: ${theme.colors["concrete:"]};
    color: ${theme.colors["concrete:"]};
  }

  &:active {
    transform: scale(0.8);
  }
`;
