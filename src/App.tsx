import { useState } from "react";
import "./App.css";
import { NumberBoard } from "./components/NumberBoard/NumberBoard";
import { Table } from "./components/Table/Table";
import { TableData } from "./components/Table/TableData.interface";
import { Wrapper } from "./styles/commonStyles";

function App() {
	const [tableData, setTableData] = useState<TableData[]>([]);

	return (
		<>
			<h1>Molkky</h1>
			<Wrapper>
				<NumberBoard setData={setTableData} />
				<Table data={tableData} />
			</Wrapper>
		</>
	);
}

export default App;
