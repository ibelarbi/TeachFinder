import type { GridProps, GridSize } from "@mui/material";
import type { ITeacher } from "@services/teachers/types";

export interface ISizing {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
}
export interface ITeachersListingProps extends Partial<GridProps> {
  teachers: ITeacher[];
  className?: string;
  sizing?: ISizing;
}
