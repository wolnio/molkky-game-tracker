import { click } from "@testing-library/user-event/dist/click";
import React, { Dispatch } from "react";
import { useState } from "react";
import { RoundButton } from "../common/RoundButton/RoundButton.styles";
import { TableData } from "../Table/TableData.interface";
import {
  ClickedPins,
  Grid,
  Numbers,
  SubmitButton,
  Wrapper,
} from "./NumberBoard.style";

export const NumberBoard = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<TableData[]>>;
}) => {
  const [clickedPins, setClickedPins] = useState<number[]>([]);

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

    setData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        tableData: clickedPins,
        score: calculatedScore,
      },
    ]);
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
