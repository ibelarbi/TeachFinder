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
import type {
  IDefaultPictureProps,
  ILogoContainerProps,
} from "@molecules/Logo/types";

export const StyledLogoContainer = styled(FlexWrapper)<ILogoContainerProps>`
  font-family: ${fontFamily.AvenirNextDemiBold};
  cursor: ${(props) => (props.$showcase ? "auto" : "pointer")};
  column-gap: ${getSpacing(4)};
`;
export const StyledLogoName = styled.div`
  width: fit-content;
  flex-shrink: 0;
`;

export const StyledLogoNameAndDetails = styled(
  FlexWrapper
)<ILogoContainerProps>`
  font-family: ${fontFamily.AvenirNextMedium};
  font-size: ${fontSize.xxLarge};
  color: ${colorPalette.cello};
  font-weight: ${fontWeight.medium};
  ${down("sm")} {
    padding-inline-start: unset;
  }
  &:hover {
    color: ${(props) =>
      props.$showcase
        ? colorPalette.cello
        : colorPalette.dodgerBlue} !important;
  }
`;

export const StyledLogoImage = styled(FlexWrapper)`
  filter: drop-shadow(0px 0px 8px rgba(20, 126, 229, 0.15));
  border: 0.5px solid ${colorPalette.poloBlue};
  z-index: 1;
  &,
  img {
    flex-shrink: 0;
    border-radius: 50%;
    ${down("sm")} {
      border-radius: 50% 50%;
      flex-shrink: 0;
      max-width: unset;
      max-height: unset;
    }
  }
`;

export const StyledStoreName = styled.div`
  ${down("sm")} {
    max-height: ${getSpacing(15)};
  }
`;

export const StyledTextCityAddress = styled.div`
  font-family: ${fontFamily.AvenirNextMedium};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.medium};
  letter-spacing: normal;
  color: ${colorPalette.hippieBlue};
`;

export const StyledLogoDefaultPicture = styled(
  FlexWrapper
)<IDefaultPictureProps>`
  ${(props) =>
    props.$size && `width: ${props.$size}px; height:${props.$size}px`};
  border-radius: 50%;
  filter: drop-shadow(0px 0px 8px rgba(20, 126, 229, 0.15));
  z-index: 1;
`;
