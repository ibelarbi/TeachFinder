import type { FC } from "react";
import type { IIconWithBackgroundProps } from "@molecules/IconWithBackground/types";
import { StylesIconWithBackgroundContainer } from "@molecules/IconWithBackground/IconWithBackground.style";

export const IconWithBackground: FC<IIconWithBackgroundProps> = ({
  $backgroundColor,
  children,
}) => (
  <StylesIconWithBackgroundContainer $backgroundColor={$backgroundColor}>
    {children}
  </StylesIconWithBackgroundContainer>
);
