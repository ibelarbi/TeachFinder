import styled from "styled-components";
import { down } from "styled-breakpoints";
import {
  colorPalette,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
} from "@utils/stylesheet";
import FlexWrapper from "@atoms/FlexWrapper";

export const StyledSectionTitleContainer = styled(FlexWrapper)`
  font-family: ${fontFamily.AvenirNextMedium};
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.medium};
  color: ${colorPalette.cello};
  row-gap: ${getSpacing(1)};
  letter-spacing: 0.57px;
  text-transform: uppercase;
  ${down("sm")} {
    @supports (-webkit-touch-callout: none) {
      padding-inline-start: ${getSpacing(4)};
    }
  }
`;
export const StyledSectionTitleUnderLine = styled.div`
  width: ${getSpacing(20)};
  height: ${getSpacing(1)};
  background-color: ${colorPalette.denim};
  border-radius: ${getSpacing(1.75)};
`;
