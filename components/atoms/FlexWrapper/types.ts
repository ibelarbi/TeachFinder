import type { ReactNode } from "react";
import type {
  AlignItemsProperties,
  DirectionFlexProperties,
  JustifyContentProperties,
} from "@utils/types";

export interface IFlexWrapperProps {
  $justify?: JustifyContentProperties;
  $alignItems?: AlignItemsProperties;
  direction?: DirectionFlexProperties;
  gap?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}
