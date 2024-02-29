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

	const initialData: TableData[] = [
		{
			username: "Tick",
			points: [],
			score: 0,
		},
		{
			username: "Tack",
			points: [],
			score: 0,
		},
		{
			username: "Toe",
			points: [],
			score: 0,
		},
	];
	const [tableData, setTableData] = useState<TableData[]>(initialData);

	useEffect(() => {
		const getGameplay = async () => {
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

			try {
				const responseData = await response.json();

				if (response.ok) {
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

	console.log("BOARD", gameplayId);

	return (
		<Wrapper>
			<NumberBoard
				data={tableData}
				setData={setTableData}
			/>
			<TableContainer>
				<Table data={tableData} />
			</TableContainer>
		</Wrapper>
	);
};
