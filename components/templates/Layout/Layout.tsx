"use client";

import type { FC } from "react";
import {
  StyledLayoutContainer,
  StyledLayoutWrapper,
} from "@templates/Layout/Layout.style";
import type { ILayoutProps } from "@templates/Layout/types";

import { Header } from "@organisms/Header/Header";
import { Footer } from "@organisms/Footer/Footer";

const Layout: FC<ILayoutProps> = ({
  children,
  header,
  withoutFooter,
  className,
}) => {
  return (
    <StyledLayoutContainer direction="column" className={className}>
      {header ?? <Header onClickAccount={() => {}} />}
      <StyledLayoutWrapper>{children}</StyledLayoutWrapper>
      {!withoutFooter && <Footer />}
    </StyledLayoutContainer>
  );
};

export default Layout;
