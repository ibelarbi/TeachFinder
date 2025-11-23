import styled from "styled-components";
import {
  colorPalette,
  elevations,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
} from "@utils/stylesheet";
import FlexWrapper from "@atoms/FlexWrapper";

export const StyledHeaderMenu = styled(FlexWrapper)`
  height: ${getSpacing(24)};
`;

export const StyledHeaderImage = styled(FlexWrapper)`
  font-family: ${fontFamily.AvenirNextMedium};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.medium};
  color: ${colorPalette.cello};
  cursor: pointer;
  column-gap: ${getSpacing(4)};
  position: relative;
  &:hover {
    color: ${colorPalette.dodgerBlue};
  }
`;
export const StyledHeaderIcons = styled(FlexWrapper)`
  column-gap: ${getSpacing(8)};
`;
export const StyledHeaderImageIcon = styled(StyledHeaderImage)`
  column-gap: ${getSpacing(4)};
  font-family: ${fontFamily.AvenirNextMedium};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.medium};
  color: ${colorPalette.cello};
  cursor: pointer;

  //hide account icon
  display: none;
`;

export const StyledHeaderNotification = styled(FlexWrapper)`
  font-family: ${fontFamily.SFProSemibold};
  position: absolute;
  inset-inline-start: ${getSpacing(2)};
  bottom: -${getSpacing(2)};
  font-size: ${fontSize.xxSmall};
  font-weight: bold;
  letter-spacing: 0.32px;
  color: ${colorPalette.white};
  background-color: ${colorPalette.dodgerBlue};
  border-radius: 50%;
  width: ${getSpacing(7)};
  height: ${getSpacing(7)};
  z-index: ${elevations.three};
`;

export const StyledLogoAndIcons = styled(FlexWrapper)`
  width: 100%;
`;
