import { useAppSelector } from "../../store/hooks";
import { Username, WelcomeTitle } from "./WelcomePage.style";

export const WelcomePage = () => {
  const { username } = useAppSelector((state) => state.auth);

  return (
    <WelcomeTitle>
      WELCOME <br />
      <Username>{username}</Username>
    </WelcomeTitle>
  );
};
