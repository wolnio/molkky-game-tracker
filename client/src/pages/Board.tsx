import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NumberBoard } from "../components/NumberBoard/NumberBoard";
import { Table } from "../components/Table/Table";
import { TableData } from "../components/Table/TableData.interface";
import { useAppSelector } from "../store/hooks";
import { TableContainer, Wrapper } from "../styles/commonStyles";

export const Board = () => {
  const { gameplayId } = useParams();
  const { token } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<TableData[] | null>(null);

  useEffect(() => {
    const getGameplay = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:8080/gameplay/${gameplayId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await response.json();

        if (response.ok) {
          setIsLoading(false);
          setTableData(responseData[0].players);
        }
      } catch (error) {
        console.log(
          `Error while fetching gameplay with ID: ${gameplayId}.`,
          error
        );
      }
    };

    getGameplay();
  }, []);

  if (isLoading) return <div>LOADING</div>;

  return tableData ? (
    <Wrapper>
      <NumberBoard data={tableData} setData={setTableData} />
      <TableContainer>
        <Table data={tableData} />
      </TableContainer>
    </Wrapper>
  ) : (
    <div>NULLLLLLLL</div>
  );
};
