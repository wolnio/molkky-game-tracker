export enum PlayerState {
  Win = "WIN",
  In_game = "IN_GAME",
  Lose = "LOSE",
}

export enum GameplayStatus {
  RUNNING = "RUNNING",
  ENDED = "ENDED",
}

export const defaultTableData: TableData[] = [
  {
    username: "",
    points: [],
    score: 0,
    state: PlayerState.In_game,
  },
];

export type TableData = {
  _id?: String;
  username: String;
  points: number[][];
  score: number;
  state: (typeof PlayerState)[keyof typeof PlayerState];
};
