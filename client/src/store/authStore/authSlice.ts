import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  username: string | null;
};

const initialState: AuthState = {
  token: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token, username } }: PayloadAction<AuthState>
    ) => {
      state.token = token;
      state.username = username;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
