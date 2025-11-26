import type { SxProps, Theme } from "@mui/material";

export const navItemStyle: SxProps<Theme> = {
  fontSize: "16px",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  color: "text.primary",
  "&:hover": {
    color: "primary.main",
  },
};
