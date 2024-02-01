import { FC, ReactNode, useEffect } from "react";
import { PointOutline, StyledTable } from "./Table.style";
import { TableData } from "./TableData.interface";

interface TableProps {
  data: TableData[];
}

export const Table: FC<TableProps> = ({ data }) => {
  const numberOfRounds = data[0].knockedPins.length;
  const knockedPinsRows = [];

  for (let index = 0; index < numberOfRounds; index++) {
    knockedPinsRows.push(
      <tr>
        <td>{index + 1}</td>
        {data.map((player) => (
          <td>
            {player.knockedPins[index]?.map((pin) => (
              <PointOutline>{pin}</PointOutline>
            ))}
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
          {data.map((player) => (
            <th>{player.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{knockedPinsRows}</tbody>
      <tfoot>
        <tr>
          <th>Score</th>
          {data.map((player) => (
            <td>{player.score}</td>
          ))}
        </tr>
      </tfoot>
    </StyledTable>
  );
};
