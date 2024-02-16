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
  const { username } = useAppSelector((state) => state.auth);
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
      </Container>
    </Wrapper>
  );
};
