import styled from "styled-components";
import FlexWrapper from "@atoms/FlexWrapper";
import { colorPalette } from "@utils/stylesheet";
import type { IIconWithBackgroundProps } from "@molecules/IconWithBackground/types";

export const StylesIconWithBackgroundContainer = styled(
  FlexWrapper
)<IIconWithBackgroundProps>`
  background: ${(props) => props.$backgroundColor ?? colorPalette.solitude};
  height: 100%;
  width: 100%;
  border-radius: inherit;
`;
