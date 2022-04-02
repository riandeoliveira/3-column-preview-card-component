import { DeviceSizes } from "../../interfaces/interfaces";
import theme from "./theme.json";

const devices: DeviceSizes = {
  desktop: `only screen and (max-width: ${theme.screen_sizes.desktop}px)`,
  laptopL: `only screen and (max-width: ${theme.screen_sizes.laptopL}px)`,
  laptop: `only screen and (max-width: ${theme.screen_sizes.laptop}px)`,
  tablet: `only screen and (max-width: ${theme.screen_sizes.tablet}px)`,
  mobileL: `only screen and (max-width: ${theme.screen_sizes.mobileL}px)`,
  mobileM: `only screen and (max-width: ${theme.screen_sizes.mobileM}px)`,
  mobileS: `only screen and (max-width: ${theme.screen_sizes.mobileS}px)`,
};

export default devices;
