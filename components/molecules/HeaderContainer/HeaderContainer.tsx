"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  StyledHeaderContainer,
  StyledHeaderContent,
} from "@molecules/HeaderContainer/HeaderContainer.style";
import type { IHeaderContainerProps } from "@molecules/HeaderContainer/types";

export const HeaderContainer: FC<IHeaderContainerProps> = ({
  children,
  className,
}) => {
  const [isInitialScroll, setIsInitialScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsInitialScroll(window.scrollY === 0);
    };
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeaderContainer
      className={className}
      $isInitialScroll={isInitialScroll}
    >
      <StyledHeaderContent $justify="space-between" direction="column">
        {children}
      </StyledHeaderContent>
    </StyledHeaderContainer>
  );
};
