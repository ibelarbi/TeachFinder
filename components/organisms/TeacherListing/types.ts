import type { GridProps } from "@mui/material";
import type { ITeacher } from "@services/teachers/types";

interface ISizing {
  xs?: number | "auto";
  sm?: number | "auto";
  md?: number | "auto";
  lg?: number | "auto";
}
export interface ITeachersListingProps extends Partial<GridProps> {
  teachers: ITeacher[];
  className?: string;
  sizing?: ISizing;
}
