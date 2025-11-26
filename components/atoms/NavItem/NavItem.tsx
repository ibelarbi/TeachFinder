"use client";

import { Box, Typography } from "@mui/material";
import type { FC } from "react";
import { navItemStyle } from "./style";
import type { INavItemProps } from "./types";
import { useIntl } from "react-intl";
import { useRouter } from "next/navigation";

export const NavItem: FC<INavItemProps> = ({ labelId, pathName }) => {
  const intl = useIntl();
  const router = useRouter();
  const onClick = () => router.push(pathName ? pathName : "/");

  return (
    <Box sx={navItemStyle} onClick={onClick}>
      <Typography variant="body1" sx={{ cursor: "pointer" }}>
        {intl.formatMessage({ id: labelId })}
      </Typography>
    </Box>
  );
};
