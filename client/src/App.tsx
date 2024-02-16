import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { AddPlayer } from "./pages/AddPlayer/AddPlayer";
import { Board } from "./pages/Board";
import { Login } from "./pages/SignForm/SignForm";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { setCredentials } from "./store/authStore/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { MainContainer } from "./styles/commonStyles";

function PrivateRoute() {
  const { token } = useAppSelector((state) => state.auth);
  console.log("PRIVATE", token);
  return token ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  //console.log("TOKEN", token);

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
          // loader: async () => {
          //   console.log("LOADER", token);
          //   if (!token) return redirect("/");
          //   return null;
          // },
          element: <PrivateRoute />,
          children: [
            {
              path: "board",
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
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      const { username, token } = JSON.parse(existingUser);
      console.log("apppp", username, token);
      dispatch(setCredentials({ username, token }));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
