import type { FC } from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import type { IFooterProps } from "@organisms/Footer/types";
import {
  StyledFooterContainer,
  StyledFooterContent,
  StyledFooterPowerBy,
  StyledFooterStoreInformation,
  StyledFooterFlexBlock,
  StyledFooterLogo,
  StyledFooterFlexBlockLogo,
} from "@organisms/Footer/Footer.style";
import FlexWrapper from "@atoms/FlexWrapper";
import { INYAD_LINK } from "@utils/constants";
import InyadLogo from "@src/assets/images/Inyad-logo.webp";

export const Footer: FC<IFooterProps> = ({}) => {
  return (
    <StyledFooterContainer>
      <StyledFooterContent direction="column">
        <StyledFooterStoreInformation
          $justify="space-between"
          $alignItems="flex-start"
        >
          <StyledFooterFlexBlockLogo
            direction="column"
            $alignItems="flex-start"
          >
            <StyledFooterLogo
              storeName={"storeName"}
              address={"address agadir"}
              city={"CAsablanca"}
              logoPath={"logo path"}
              size={55}
            />
          </StyledFooterFlexBlockLogo>
          <StyledFooterFlexBlock></StyledFooterFlexBlock>
        </StyledFooterStoreInformation>

        <FlexWrapper direction="column">
          <StyledFooterPowerBy>
            <FormattedMessage id="powered by inyad" />
          </StyledFooterPowerBy>
          <a href={`${INYAD_LINK}`} target="_blank" rel="noreferrer">
            <Image src={InyadLogo} alt="Inyad" width={70} height={20} />
          </a>
        </FlexWrapper>
      </StyledFooterContent>
    </StyledFooterContainer>
  );
};
