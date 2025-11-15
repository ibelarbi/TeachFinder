import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const initialMenuState = {
  showcase: false,
};

export type MenuState = Readonly<typeof initialMenuState>;

const menuSlice: Slice<MenuState> = createSlice({
  name: 'menu',
  initialState: initialMenuState,
  reducers: {
    initMenuState: (_state: MenuState, action: PayloadAction<MenuState>) => action.payload,
    setShowCase: (state: MenuState, action: PayloadAction<boolean>) => ({
      ...state,
      showcase: action.payload,
    }),
  },
});

export const { setShowCase, initMenuState } = menuSlice.actions;

export default menuSlice.reducer;
