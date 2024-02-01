import { click } from "@testing-library/user-event/dist/click";
import React, { Dispatch, FC } from "react";
import { useState } from "react";
import { RoundButton } from "../common/RoundButton/RoundButton.styles";
import { SubmitButton } from "../common/SubmitButton.styles";
import { TableData } from "../Table/TableData.interface";
import { ClickedPins, Grid, Numbers, Wrapper } from "./NumberBoard.style";

type NumberBoardProps = {
  data: TableData[];
  setData: React.Dispatch<React.SetStateAction<TableData[]>>;
};

export const NumberBoard: FC<NumberBoardProps> = ({ data, setData }) => {
  const [clickedPins, setClickedPins] = useState<number[]>([]);
  const [playerTurn, setPlayerTurn] = useState<number>(1);
  const playersNumber = data.length;

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

  const handleOnSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const calculatedScore =
      clickedPins.length > 1 ? clickedPins.length : clickedPins[0];

    const modifiedData = [...data];
    modifiedData[playerTurn - 1].knockedPins.push(clickedPins);
    modifiedData[playerTurn - 1].score += calculatedScore;

    setData(modifiedData);
    setPlayerTurn((prevTurn) =>
      prevTurn === playersNumber ? 1 : prevTurn + 1
    );
    setClickedPins([]);
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
      <Grid className="parent">{drawPinsSetup()}</Grid>
      <ClickedPins>
        <p>Clicked pins: </p>
        <Numbers>{clickedPins.join(" ")}</Numbers>
      </ClickedPins>
      <SubmitButton
        onClick={(e) => handleOnSubmit(e)}
        disabled={clickedPins.length === 0}
      >
        Submit
      </SubmitButton>
    </Wrapper>
  );
};
