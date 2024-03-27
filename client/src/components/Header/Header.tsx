import { setCredentials } from "../../store/authStore/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ActionSection,
  HeaderLinks,
  HeaderTitle,
  LogoutBtn,
  StyledLink,
  UserInfo,
  Wrapper,
} from "./Header.style";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem("user");

    dispatch(
      setCredentials({
        token: null,
        username: null,
      })
    );
  };

  return (
    <Wrapper>
      <HeaderTitle>Molkky</HeaderTitle>
      {username && (
        <ActionSection>
          <HeaderLinks>
            <StyledLink to={"/auth/dashboard"}>Dashboard</StyledLink>
            <StyledLink to={"/auth/addPlayer"}>Add player</StyledLink>
            <StyledLink to={"/auth/gameplays"}>Gameplays</StyledLink>
          </HeaderLinks>
          <UserInfo>
            <p>Logged: {!!username ? username : "NOT"}</p>
            <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
          </UserInfo>
        </ActionSection>
      )}
    </Wrapper>
  );
};
