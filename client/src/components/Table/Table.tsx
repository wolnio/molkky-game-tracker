import { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { PointOutline, StyledTable } from "./Table.style";
import { TableData } from "./TableData.interface";

interface TableProps {
  data: TableData[];
}

export const Table: FC<TableProps> = ({ data }) => {
  const { currentPlayerTurn } = useAppSelector((state) => state.player);

  const numberOfRounds = data[0].points.length;
  const knockedPinsRows = [];

  for (let index = 0; index < numberOfRounds; index++) {
    knockedPinsRows.push(
      <tr>
        <td>{index + 1}</td>
        {data.map((player) => (
          <td data-isDisabled={player.loss}>
            {player.points[index]?.map((pin) => {
              return pin ? (
                <PointOutline disabled={player.loss}>{pin}</PointOutline>
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
    <StyledTable>
      <thead>
        <tr>
          <th>Id</th>
          {data.map((player, index) => (
            <th
              data-isDisabled={player.loss}
              data-active={index === currentPlayerTurn}
            >
              {player.username}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{knockedPinsRows}</tbody>
      <tfoot>
        <tr>
          <th>Score</th>
          {data.map((player) => (
            <td data-isDisabled={player.loss}>{player.score}</td>
          ))}
        </tr>
      </tfoot>
    </StyledTable>
  );
};
