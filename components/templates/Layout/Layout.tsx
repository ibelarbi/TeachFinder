"use client";

import type { FC } from "react";
import { StyledLayoutContainer } from "@templates/Layout/Layout.style";
import type { ILayoutProps } from "@templates/Layout/types";

import { Header } from "@organisms/Header/Header";
import { Footer } from "@organisms/Footer/Footer";
import { Box } from "@mui/material";
import { getSpacing, MAX_WIDTH } from "@utils/stylesheet";

const Layout: FC<ILayoutProps> = ({
  children,
  header,
  withoutFooter,
  className,
}) => {
  return (
    <StyledLayoutContainer direction="column" className={className}>
      {header ?? <Header onClickAccount={() => {}} />}
      <Box
        sx={{
          width: "100%",
          maxWidth: `${MAX_WIDTH}px`,
          overflow: "hidden",
          flex: 1,
          marginTop: getSpacing(40),
          paddingTop: getSpacing(30),
        }}
      >
        {children}
      </Box>
      {!withoutFooter && <Footer />}
    </StyledLayoutContainer>
  );
};

export default Layout;
