import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import type { FC } from "react";
import { FormattedMessage } from "react-intl";
import ProfileIcon from "@src/assets/svg/icon-account-profile.svg";
import CartIcon from "@src/assets/svg/icon-unfilled-cart.svg";
import {
  StyledHeaderIcons,
  StyledHeaderImage,
  StyledHeaderImageIcon,
  StyledHeaderMenu,
  StyledLogoAndIcons,
} from "@organisms/Header/Header.style";
import type { IHeaderProps } from "@organisms/Header/types";
import { HeaderContainer } from "@molecules/HeaderContainer/HeaderContainer";
import { Logo } from "@molecules/Logo/Logo";
import Image from "next/image";

export const Header: FC<IHeaderProps> = ({ onClickAccount, searchDiv }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeaderContainer>
      <StyledLogoAndIcons $justify="space-between">
        <Logo
          logoPath={"image path"}
          storeName={"store name"}
          size={isMobile ? 40 : 48}
        />
        {!isMobile && (
          <StyledHeaderMenu $justify="flex-end">
            <StyledHeaderIcons $justify="space-between">
              <Link passHref href="/cart">
                <StyledHeaderImage>
                  <Image
                    src={CartIcon.src}
                    alt="cart icon"
                    width={24}
                    height={24}
                  />
                  <FormattedMessage id="home cart" />
                </StyledHeaderImage>
              </Link>
              <StyledHeaderImageIcon onClick={onClickAccount}>
                <Image
                  src={ProfileIcon}
                  alt="cart icon"
                  width={24}
                  height={24}
                />
                <FormattedMessage id="home.account" />
              </StyledHeaderImageIcon>
            </StyledHeaderIcons>
          </StyledHeaderMenu>
        )}
      </StyledLogoAndIcons>
      {searchDiv}
    </HeaderContainer>
  );
};
