import { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { PointOutline, StyledTable, WinBadge } from "./Table.style";
import { GameplayStatus, PlayerState, TableData } from "./TableData.interface";

interface TableProps {
  data: TableData[];
  gameplayStatus: GameplayStatus;
}

export const Table: FC<TableProps> = ({ data, gameplayStatus }) => {
  const { currentPlayerTurn } = useAppSelector((state) => state.player);

  const numberOfRounds = data[0].points.length;
  const knockedPinsRows = [];

  const playerStateLose = (player: TableData) =>
    player.state === PlayerState.Lose;

  for (let index = 0; index < numberOfRounds; index++) {
    knockedPinsRows.push(
      <tr>
        <td>{index + 1}</td>
        {data.map((player) => (
          <td data-isdisabled={playerStateLose(player)}>
            {player.points[index]?.map((pin) => {
              return pin ? (
                <PointOutline disabled={playerStateLose(player)}>
                  {pin}
                </PointOutline>
              ) : (
                "MISS"
              );
            })}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <StyledTable $isWinnerVisible={gameplayStatus === GameplayStatus.ENDED}>
      <thead>
        <tr>
          <th>Id</th>
          {data.map((player, index) => (
            <th
              data-isdisabled={playerStateLose(player)}
              data-active={index === currentPlayerTurn}
            >
              {player.username}
              {player.state === PlayerState.Win && <WinBadge>Winner!</WinBadge>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{knockedPinsRows}</tbody>
      <tfoot>
        <tr>
          <th>Score</th>
          {data.map((player) => {
            return (
              <td data-isdisabled={playerStateLose(player)}>{player.score}</td>
            );
          })}
        </tr>
      </tfoot>
    </StyledTable>
  );
};
