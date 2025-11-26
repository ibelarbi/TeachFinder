"use client";

import styled from "styled-components";
import { down } from "styled-breakpoints";
import {
  colorPalette,
  elevations,
  getSpacing,
  MAX_WIDTH,
} from "@utils/stylesheet";
import FlexWrapper from "@atoms/FlexWrapper";
import type { IScrollProps } from "@molecules/HeaderContainer/types";

export const StyledHeaderContainer = styled.div<IScrollProps>`
  position: fixed;
  z-index: ${elevations.two};
  top: 0;
  width: 100%;
  background: ${colorPalette.white};
  box-shadow: ${(props) =>
    props.$isInitialScroll ? "0px" : "0px 4px 16px rgba(0, 0, 0, 0.05)"};
`;
export const StyledHeaderContent = styled(FlexWrapper)`
  padding: ${getSpacing(8)} ${getSpacing(10)};
  max-width: ${`${MAX_WIDTH}px`};
  margin: 0 auto;
  ${down("sm")} {
    padding: ${getSpacing(5)} ${getSpacing(8)};
  }
  gap: ${getSpacing(3)};
`;
