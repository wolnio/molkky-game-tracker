import { Link } from "react-router-dom";
import { setCredentials } from "../../store/authStore/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { HeaderTitle, Wrapper } from "./Header.style";

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
        <>
          <button onClick={handleLogout}>Log out</button>
          <Link to={"/auth/dashboard"}>Dashboard</Link>
          <Link to={"/auth/board"}>Board</Link>
          <Link to={"/auth/addPlayer"}>Add player</Link>
        </>
      )}
      <p>Logged: {!!username ? username : "NOT"}</p>
    </Wrapper>
  );
};
