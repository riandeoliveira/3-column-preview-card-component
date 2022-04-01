import theme from "./theme.json";
import { DeviceSizes } from "../../interfaces/interfaces";

const { screen_sizes } = theme;

const devices: DeviceSizes = {
  desktop: `only screen and (max-width: ${screen_sizes.desktop}px)`,
  laptopL: `only screen and (max-width: ${screen_sizes.laptopL}px)`,
  laptop: `only screen and (max-width: ${screen_sizes.laptop}px)`,
  tablet: `only screen and (max-width: ${screen_sizes.tablet}px)`,
  mobileL: `only screen and (max-width: ${screen_sizes.mobileL}px)`,
  mobileM: `only screen and (max-width: ${screen_sizes.mobileM}px)`,
  mobileS: `only screen and (max-width: ${screen_sizes.mobileS}px)`,
};

export default devices;
