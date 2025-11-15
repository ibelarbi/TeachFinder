import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { Action, Dispatch } from "redux";
import type { RootState } from "@redux/store";

export const useAppDispatch = (): Dispatch<Action> => useDispatch();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
