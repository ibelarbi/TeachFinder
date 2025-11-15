import { useAppSelector } from "@redux/hooks";

export const useShowcaseSelector = (): boolean =>
  useAppSelector((state) => state.menu.showcase);
