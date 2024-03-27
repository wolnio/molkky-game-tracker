import React, { FC, useEffect } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setCurrentPlayerTurn,
  setNextPlayerTurn,
} from "../../store/playerSlice";
import { RoundButton } from "../common/RoundButton/RoundButton.styles";
import { SubmitButton } from "../common/SubmitButton.styles";
import { TableData } from "../Table/TableData.interface";
import {
  ClickedPins,
  Grid,
  MissedButton,
  Numbers,
  Wrapper,
} from "./NumberBoard.style";

type NumberBoardProps = {
  data: TableData[];
  setData: React.Dispatch<React.SetStateAction<TableData[] | null>>;
};

export const NumberBoard: FC<NumberBoardProps> = ({ data, setData }) => {
  const { token } = useAppSelector((state) => state.auth);
  const { currentPlayerTurn } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  const [clickedPins, setClickedPins] = useState<number[]>([]);
  const playersNumber = data.length;

  useEffect(() => {
    if (data[currentPlayerTurn].loss)
      dispatch(setNextPlayerTurn({ numberOfPlayers: playersNumber }));
  }, [currentPlayerTurn]);

  useEffect(() => {
    if (data[0].points.length === 0) return;

    let currentPlayer = 0;
    let maxTurns = data[0].points.length;
    data.every((singleData, index) => {
      const numberOfTurns = singleData.points.length;

      if (numberOfTurns < maxTurns && !singleData.loss) {
        currentPlayer = index;
        return false;
      }
      return true;
    });
    dispatch(setCurrentPlayerTurn({ playerIdToBeSet: currentPlayer }));
  }, []);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isBtnActive: boolean
  ) => {
    e.preventDefault();
    const { innerText: btnValue } = e.currentTarget;
    const numericBtnValue = parseInt(btnValue);
    setClickedPins((prevValue) => {
      return isBtnActive
        ? [...prevValue.filter((pin) => pin !== numericBtnValue)]
        : [...prevValue, numericBtnValue];
    });
  };

  const handleSavePointsToDB = async () => {
    const { _id: playersId, ...updatedPointsBody } = data[currentPlayerTurn];

    try {
      const response = await fetch(
        `http://localhost:8080/gameplay/players/${playersId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedPointsBody),
        }
      );
    } catch (error) {
      console.log(`Error while fetching player with ID: ${playersId}.`, error);
    }
  };

  const checkIfPlayerLost = (playerData: TableData) => {
    const { points } = playerData;
    const flatPointsArray = points.flat();

    for (let i = 0; i < flatPointsArray.length - 1; i++) {
      if (
        flatPointsArray[i] === 0 &&
        flatPointsArray[i + 1] === 0 &&
        flatPointsArray[i + 2] === 0
      ) {
        return true;
      }
    }
    return false;
  };

  const handleBoardButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isMissed: boolean
  ) => {
    e.preventDefault();

    const calculatedScore =
      clickedPins.length > 1 ? clickedPins.length : clickedPins[0];

    const modifiedData = [...data];
    const currentPlayerData = modifiedData[currentPlayerTurn];

    if (isMissed) {
      currentPlayerData.points.push([0]);
      currentPlayerData.loss = checkIfPlayerLost(currentPlayerData);
    } else {
      currentPlayerData.points.push(clickedPins);

      if (currentPlayerData.score + calculatedScore > 50)
        currentPlayerData.score = 25;
      else currentPlayerData.score += calculatedScore;
    }

    dispatch(setNextPlayerTurn({ numberOfPlayers: playersNumber }));

    setData(modifiedData);
    //setNextPlayerTurn(playersNumber);
    setClickedPins([]);
    handleSavePointsToDB();
  };

  const drawPinsSetup = () => {
    const pinsOrder = [1, 2, 3, 10, 4, 5, 11, 12, 6, 7, 9, 8];
    let content = [];
    for (const [i, pinValue] of pinsOrder.entries()) {
      const isBtnActive = clickedPins.includes(pinValue);
      content.push(
        <RoundButton
          key={`pin${i}`}
          className={`div${i + 1}`}
          onClick={(e) => handleOnClick(e, isBtnActive)}
          $isActive={isBtnActive}
        >
          {pinValue}
        </RoundButton>
      );
    }
    return content;
  };

  return (
    <Wrapper>
      {data && (
        <>
          <Grid className="parent">{drawPinsSetup()}</Grid>
          <ClickedPins>
            <MissedButton onClick={(e) => handleBoardButtonClick(e, true)}>
              Miss!
            </MissedButton>
            <p>Clicked pins: </p>
            <Numbers>{clickedPins.join(" ")}</Numbers>
          </ClickedPins>
          <SubmitButton
            onClick={(e) => handleBoardButtonClick(e, false)}
            disabled={clickedPins.length === 0}
          >
            Submit
          </SubmitButton>
        </>
      )}
    </Wrapper>
  );
};
