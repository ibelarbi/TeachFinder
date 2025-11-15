import { rootReducer } from "@redux/reducers";
import { initialMenuState } from "./showcase";

export type RootState = {
  [ReducerName in keyof typeof rootReducer]: ReturnType<
    (typeof rootReducer)[ReducerName]
  >;
};
export const initialRootState: RootState = {
  menu: initialMenuState,
};
