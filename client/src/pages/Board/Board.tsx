import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NumberBoard } from "../../components/NumberBoard/NumberBoard";
import { Table } from "../../components/Table/Table";
import {
  defaultTableData,
  GameplayStatus,
  TableData,
} from "../../components/Table/TableData.interface";
import { useAppSelector } from "../../store/hooks";
import { TableContainer } from "../../styles/commonStyles";
import { BoardWrapper } from "./Board.styles";

export const Board = () => {
  const { gameplayId } = useParams();
  const { token } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState<TableData[]>(defaultTableData);
  const [gameplayStatus, setGameplayStatus] = useState<GameplayStatus>(
    GameplayStatus.RUNNING
  );

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
          setGameplayStatus(responseData[0].status);
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

  return (
    <BoardWrapper>
      {gameplayStatus === GameplayStatus.RUNNING && (
        <NumberBoard
          data={tableData}
          setData={setTableData}
          setGameplayStatus={setGameplayStatus}
        />
      )}
      <TableContainer>
        <Table data={tableData} gameplayStatus={gameplayStatus} />
      </TableContainer>
    </BoardWrapper>
  );
};
