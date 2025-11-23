import type { ReactNode } from "react";

export interface IHeaderContainerProps {
  className?: string;
  children?: ReactNode;
}
export interface IScrollProps {
  $isInitialScroll: boolean;
  children: ReactNode;
  className?: string;
}
