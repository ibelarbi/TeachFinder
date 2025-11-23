import { useDispatch } from "react-redux";
import { setShowCase } from "./slice";

export const useInitializeShowcase = (): ((showcase: boolean) => void) => {
  const dispatch = useDispatch();

  return (showcase: boolean) => dispatch(setShowCase(showcase));
};
