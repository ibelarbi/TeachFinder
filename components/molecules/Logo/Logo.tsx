"use client";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import Image from "next/image";
import {
  StyledLogoContainer,
  StyledLogoDefaultPicture,
  StyledLogoImage,
  StyledLogoNameAndDetails,
  StyledStoreName,
  StyledTextCityAddress,
} from "@molecules/Logo/Logo.style";
import type { ILogoProps } from "@molecules/Logo/types";
import DefaultLogoIcon from "@assets/svg/icon-logo-default-photo.svg";
import { IconWithBackground } from "@molecules/IconWithBackground/IconWithBackground";
import DefaultLogo from "@src/assets/svg/icon-logo-default-photo.svg";

export const Logo: FC<ILogoProps> = ({
  logoPath = "",
  storeName,
  size = 48,
  city,
  address,
  className,
}) => {
  const router = useRouter();

  const goToHome = async () => router.push("/");

  const handleStoreLogoClick = () => {
    goToHome().catch(Error);
  };

  return (
    <StyledLogoContainer
      onClick={handleStoreLogoClick}
      className={className}
      $showcase={true}
    >
      {logoPath ? (
        <StyledLogoImage>
          <Image
            src={DefaultLogo.src}
            alt={storeName}
            width={size}
            height={size}
          />
        </StyledLogoImage>
      ) : (
        <StyledLogoDefaultPicture $size={size}>
          <IconWithBackground>
            <DefaultLogoIcon />
          </IconWithBackground>
        </StyledLogoDefaultPicture>
      )}
      <StyledLogoNameAndDetails
        $alignItems="flex-start"
        direction="column"
        $justify="center"
        $showcase={true}
      >
        <StyledStoreName>{storeName}</StyledStoreName>
        <StyledTextCityAddress>{address}</StyledTextCityAddress>
        <StyledTextCityAddress>{city}</StyledTextCityAddress>
      </StyledLogoNameAndDetails>
    </StyledLogoContainer>
  );
};
