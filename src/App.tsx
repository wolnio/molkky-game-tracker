import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NumberBoard } from "./components/NumberBoard/NumberBoard";
import { Table } from "./components/Table/Table";
import { TableData } from "./components/Table/TableData.interface";
import { MainContainer, TableContainer, Wrapper } from "./styles/commonStyles";

function App() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  return (
    <BrowserRouter></BrowserRouter>
    // <MainContainer>
    //   <Header />
    //   <Wrapper>
    //     <NumberBoard setData={setTableData} />
    //     <TableContainer>
    //       <Table data={tableData} />
    //     </TableContainer>
    //   </Wrapper>
    // </MainContainer>
  );
}

export default App;
