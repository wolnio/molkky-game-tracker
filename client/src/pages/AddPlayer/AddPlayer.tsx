import { useEffect } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  NewPlayerCard,
  PlayerFormFields,
} from "../../components/NewPlayerCard/NewPlayerCard";
import { useAppSelector } from "../../store/hooks";
import {
  AddNewPlayerButton,
  ColumnWrapper,
  PlayersContainer,
  GridContainer,
  TitleContainer,
  TitleInput,
  CreateGameBtn,
} from "./AddPlayer.style";

export type Player = {
  id: number;
  name: string;
  color: string;
};

export const AddPlayer = () => {
  const { username, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const playersArrayName = "players";

  const defaultValues = {
    title: "",
    [playersArrayName]: [{ name: "", color: "" }],
  };

  const methods = useForm({ defaultValues });
  const { register, handleSubmit, control, setValue, getValues, watch } =
    methods;

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: playersArrayName,
  });

  useEffect(() => {
    update(0, { name: username!, color: "" });
  }, []);

  const handleAddNewPlayer = () => {
    append({ name: "", color: "" });
  };

  const handleDeletePlayer = (index: number) => {
    remove(index);
  };

  const handleCreateGame = async (data: PlayerFormFields) => {
    const playersNames = data.players.map((player) => ({
      username: player.name,
    }));
    try {
      const response = await fetch("http://localhost:8080/gameplay/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: data.title,
          players: playersNames,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate(`/auth/board/${responseData.gameplayId}`, { replace: true });
      }
    } catch (err) {
      console.log("Error while POST");
    }
  };

  return (
    <ColumnWrapper>
      <FormProvider {...methods}>
        <TitleContainer>
          <TitleInput
            type="text"
            placeholder={"Title"}
            {...register("title")}
            maxLength={25}
          />
        </TitleContainer>
        <PlayersContainer
          id="playersForm"
          onSubmit={handleSubmit(handleCreateGame)}
        >
          <GridContainer
            $shouldDisplayTwoColumns={watch()[playersArrayName].length > 4}
          >
            {fields.map((item, index) => (
              <NewPlayerCard
                key={`player-card-${item.id}`}
                index={index}
                onDeleteItem={handleDeletePlayer}
                register={register}
                getValues={getValues}
              />
            ))}
          </GridContainer>
        </PlayersContainer>
        {watch()[playersArrayName].length < 8 && (
          <AddNewPlayerButton onClick={handleAddNewPlayer}>
            Add new
          </AddNewPlayerButton>
        )}
        <CreateGameBtn type="submit" form="playersForm">
          Create game
        </CreateGameBtn>
      </FormProvider>
    </ColumnWrapper>
  );
};
