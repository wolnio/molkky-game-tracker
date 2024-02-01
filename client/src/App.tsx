import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainContainer } from "./styles/commonStyles";

function App() {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
}

export default App;
