import { FC, ReactNode } from "react";
import { TableData } from "./TableData.interface";

interface TableProps {
	data: TableData[];
}

export const Table: FC<TableProps> = ({ data }) => {
	let generalScore = 0;
	console.log("data", data);
	return (
		<table>
			<tr>
				<th>Id</th>
				<th>Name</th>
			</tr>
			{
				data.map((item) => {
					generalScore += item.score;
					return (
						<tr>
							<td>{item.id}</td>
							<td>{item.tableData}</td>
						</tr>
					);
				}) as ReactNode
			}
			<tr>
				<th>Score</th>
				<td>{generalScore}</td>
			</tr>
		</table>
	);
};
