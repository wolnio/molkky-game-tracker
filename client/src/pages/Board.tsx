import { useState } from "react";
import { NumberBoard } from "../components/NumberBoard/NumberBoard";
import { Table } from "../components/Table/Table";
import { TableData } from "../components/Table/TableData.interface";
import { MainContainer, TableContainer, Wrapper } from "../styles/commonStyles";

export const Board = () => {
  const initialData: TableData[] = [
    {
      name: "Tick",
      knockedPins: [],
      score: 0,
    },
    {
      name: "Tack",
      knockedPins: [],
      score: 0,
    },
    {
      name: "Toe",
      knockedPins: [],
      score: 0,
    },
  ];
  const [tableData, setTableData] = useState<TableData[]>(initialData);

  return (
    <Wrapper>
      <NumberBoard data={tableData} setData={setTableData} />
      <TableContainer>
        <Table data={tableData} />
      </TableContainer>
    </Wrapper>
  );
};
