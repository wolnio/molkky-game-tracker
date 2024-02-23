import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";

export const GameplaysList = () => {
  const { token } = useAppSelector((state) => state.auth);
  const [gameplays, setGameplays] = useState([]);

  useEffect(() => {
    const getGameplays = async () => {
      const response = await fetch("http://localhost:8080/gameplay/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      try {
        const responseData = await response.json();

        if (response.ok) {
          setGameplays(responseData);
        }
      } catch (error) {
        console.log("Error while fetching gameplays.", error);
      }
    };

    getGameplays();
  }, []);

  console.log("ALL GAMEPLAYS", gameplays);

  return <div>Gameplays</div>;
};
