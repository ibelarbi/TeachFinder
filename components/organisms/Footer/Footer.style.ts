import styled from "styled-components";
import { down } from "styled-breakpoints";
import FlexWrapper from "@atoms/FlexWrapper";
import {
  colorPalette,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
  MAX_WIDTH,
} from "@utils/stylesheet";
import {
  StyledLogoNameAndDetails,
  StyledStoreName,
} from "@molecules/Logo/Logo.style";
import { Logo } from "@molecules/Logo/Logo";

export const StyledFooterContainer = styled(FlexWrapper)`
  min-height: fit-content;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: ${getSpacing(18)};
  ${down("sm")} {
    padding-bottom: ${getSpacing(60)};
    * {
      align-items: center;
    }
  }
`;

export const StyledFooterContent = styled(FlexWrapper)`
  width: 100%;
  max-width: ${`${MAX_WIDTH}px`};
`;

export const StyledFooterStoreInformation = styled(FlexWrapper)`
  width: 100%;
  padding: ${getSpacing(39)} 0 ${getSpacing(42)};
  ${down("sm")} {
    padding: 0 0 ${getSpacing(30)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: ${getSpacing(16)};
  }
`;
// export const StyledFooterOpeningHours = styled.div`
//   ${up('lg')} {
//     flex-grow: 1;
//     margin-inline-start: ${getSpacing(40)};
//   }
// `;

export const StyledFooterLogo = styled(Logo)`
  ${down("sm")} {
    flex-direction: column;
    row-gap: ${getSpacing(5)};
    ${StyledLogoNameAndDetails} {
      max-width: ${getSpacing(82)};
      text-align: center;
    }
  }
  ${StyledLogoNameAndDetails} {
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.medium};
    font-family: ${fontFamily.AvenirNextMedium};
    line-height: normal;
    letter-spacing: normal;
    color: ${colorPalette.cello};
    height: fit-content;
    &:hover {
      color: ${colorPalette.dodgerBlue};
    }
  }
  ${StyledStoreName} {
    padding-bottom: ${getSpacing(2)};
    ${down("sm")} {
      padding-bottom: ${getSpacing(4)};
    }
  }
`;
export const StyledFooterFlexBlockLogo = styled(FlexWrapper)`
  row-gap: ${getSpacing(11)};
  flex-basis: 50%;
  ${down("sm")} {
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;
    padding-inline: ${getSpacing(18)};
    box-sizing: border-box;
    row-gap: ${getSpacing(16)};
  }
`;
export const StyledFooterFlexBlock = styled(FlexWrapper)`
  flex-grow: 1;
  justify-content: end;
  ${down("sm")} {
    justify-content: center;
    width: 100%;
  }
`;

export const StyledFooterPowerBy = styled.span`
  font-size: ${fontSize.small};
  font-family: ${fontFamily.AvenirNextDemiBold};
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.49px;
  color: ${colorPalette.cello};
  padding: 0 ${getSpacing(4)} ${getSpacing(4)} ${getSpacing(4)};
`;
