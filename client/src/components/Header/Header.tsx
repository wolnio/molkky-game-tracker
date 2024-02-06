import { useAppSelector } from "../../store/hooks";
import { HeaderTitle, Wrapper } from "./Header.style";

export const Header = () => {
  const { token } = useAppSelector((state) => state.auth);
  console.log("header token: ", token);

  return (
    <Wrapper>
      <HeaderTitle>Molkky</HeaderTitle>
      <p>Logged: {!!token ? token : "NOT"}</p>
    </Wrapper>
  );
};
