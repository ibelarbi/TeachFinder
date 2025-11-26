import type { SxProps, Theme } from "@mui/material";
import { colorPalette, getSpacing } from "@utils/stylesheet";

export const navBarStyle: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: colorPalette.denim,
  paddingX: getSpacing(20),
  borderRadius: 4,
  height: getSpacing(20),
};
