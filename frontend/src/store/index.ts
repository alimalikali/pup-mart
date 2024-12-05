import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  theme: string;
}

const initialState: initialStateTypes = {
  theme: "light", // Default theme
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalSlice.actions; // Export action
export default globalSlice.reducer;
