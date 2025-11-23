import type { ReactElement } from "react";

export interface ILayoutProps {
  withoutFooter?: boolean;
  header?: ReactElement;
  className?: string;
  children: ReactElement;
}
