import { ChangeEvent, useEffect, useState } from "react";
import { NewPlayerCard } from "../../components/NewPlayerCard/NewPlayerCard";
import { useAppSelector } from "../../store/hooks";
import { Wrapper } from "../../styles/commonStyles";
import {
  AddNewPlayerButton,
  Container,
  GridContainer,
} from "./AddPlayer.style";

export type Player = {
  id: number;
  name: string;
  color: string;
};

export const AddPlayer = () => {
  const { username, token } = useAppSelector((state) => state.auth);
  const initialPlayerArr: Player[] = [{ id: 1, name: username!, color: "" }];

  const [players, setPlayers] = useState<Player[]>(initialPlayerArr);

  const handleAddNewPlayer = () => {
    setPlayers &&
      setPlayers((prev) => [
        ...prev,
        { id: prev.length + 1, name: "", color: "" },
      ]);
  };

  const handleDeletePlayer = (player: Player) => {
    setPlayers &&
      setPlayers((prev) => {
        return prev.filter((item) => item.id !== player.id);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, player: Player) => {
    const updatedPlayer = players.map((item) =>
      item.id === player.id ? { ...player, name: e.target.value } : item
    );
    setPlayers(updatedPlayer);
  };

  const handleCreateGame = async () => {
    const playersNames = players.map((player) => ({
      username: player.name,
    }));
    //console.log("create game: ", "players:" + JSON.stringify(playersNames));

    const response = await fetch("http://localhost:8080/gameplay/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ players: playersNames }),
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log("RESPONSE", responseData);
    }
  };

  return (
    <Wrapper>
      <Container>
        <GridContainer $shouldDisplayTwoColumns={players.length > 4}>
          {players.map((item, index) => (
            <NewPlayerCard
              key={`player-card-${index + 1}`}
              index={index + 1}
              data={item}
              onDeleteItem={handleDeletePlayer}
              onInputChange={handleChange}
            />
          ))}
        </GridContainer>
        {players.length < 8 && (
          <AddNewPlayerButton onClick={handleAddNewPlayer}>
            ADD NEW
          </AddNewPlayerButton>
        )}
        <button onClick={handleCreateGame}>Create game</button>
      </Container>
    </Wrapper>
  );
};
