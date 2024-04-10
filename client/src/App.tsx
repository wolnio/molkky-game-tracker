import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { AddPlayer } from "./pages/AddPlayer/AddPlayer";
import { Board } from "./pages/Board/Board";
import { GameplaysList } from "./pages/Gameplays/GameplaysList";
import { Login } from "./pages/SignForm/SignForm";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { setCredentials } from "./store/authStore/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { MainContainer } from "./styles/commonStyles";

function PrivateRoute() {
  const { token } = useAppSelector((state) => state.auth);
  return token ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const dispatch = useAppDispatch();
  const existingUser = localStorage.getItem("user");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainContainer>
          <Header />
          <Outlet />
        </MainContainer>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "auth",
          element: <PrivateRoute />,
          children: [
            {
              path: "board/:gameplayId",
              element: <Board />,
            },
            {
              path: "addPlayer",
              element: <AddPlayer />,
            },
            {
              path: "dashboard",
              element: <WelcomePage />,
            },
            {
              path: "gameplays",
              element: <GameplaysList />,
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    if (existingUser) {
      const { username, token } = JSON.parse(existingUser);
      dispatch(setCredentials({ username, token }));
    } else {
      dispatch(setCredentials({ username: null, token: null }));
    }
  }, [existingUser]);

  return <RouterProvider router={router} />;
}

export default App;
