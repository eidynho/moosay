import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
    /* eslint-disable */
    export interface DefaultTheme extends ThemeType {}
}
