"use client";

import { Box } from "@mui/material";
import { navBarStyle } from "./style";
import { NavItem } from "@atoms/NavItem/NavItem";
import { NAV_PATHS } from "@utils/constants";

export const Navbar = () => {
  return (
    <Box sx={navBarStyle}>
      <Box sx={{ display: "flex", gap: 4 }}>
        <NavItem labelId="Accueil" />
        <NavItem labelId="Professeurs" pathName={NAV_PATHS.TEACHERS} />
        <NavItem labelId="Mes informations" pathName={NAV_PATHS.PROFILE} />
      </Box>
    </Box>
  );
};
