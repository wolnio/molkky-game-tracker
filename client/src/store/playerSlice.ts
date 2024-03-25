import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "playerTurn",
  initialState: { currentPlayerTurn: 0 },
  reducers: {
    setNextPlayerTurn: (
      state,
      {
        payload: { numberOfPlayers },
      }: PayloadAction<{ numberOfPlayers: number }>
    ) => {
      const oldPlayerTurn = state.currentPlayerTurn;
      state.currentPlayerTurn =
        oldPlayerTurn === numberOfPlayers - 1 ? 0 : oldPlayerTurn + 1;
    },
    setCurrentPlayerTurn: (
      state,
      {
        payload: { playerIdToBeSet },
      }: PayloadAction<{ playerIdToBeSet: number }>
    ) => {
      state.currentPlayerTurn = playerIdToBeSet;
    },
  },
});

export const { setCurrentPlayerTurn, setNextPlayerTurn } = playerSlice.actions;

export default playerSlice.reducer;
