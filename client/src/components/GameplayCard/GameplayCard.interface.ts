import { GameplayStatus, TableData } from "../Table/TableData.interface";

export type GameplayCardInterface = {
  _id: string;
  title: string;
  players: TableData[];
  created: Date;
  status: GameplayStatus;
};
