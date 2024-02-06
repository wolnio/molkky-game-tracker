import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token } }: PayloadAction<{ token: string }>
    ) => {
      console.log("inside", token);
      state.token = token;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
