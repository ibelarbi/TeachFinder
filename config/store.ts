import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { rootReducer } from "@redux/reducers";
import { NODE_ENV } from "@utils/constants";
import type { RootState } from "@redux/store";

type StoreType = ReturnType<typeof configureStore>;

export const initializeStore = (
  preloadedState?: Partial<RootState>
): StoreType => {
  const options = {
    devTools: NODE_ENV !== "production",
    reducer: rootReducer,
    preloadedState,
  };

  return configureStore(options);
};

export const useStore = (preloadedState?: Partial<RootState>): StoreType =>
  useMemo(() => initializeStore(preloadedState), [preloadedState]);
