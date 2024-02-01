import React from "react";
import { useState } from "react";
import { Color, Container } from "./ColorPicker.style";

export const ColorPicker = ({
  pickedColor,
  setPickedColor,
}: {
  pickedColor: string;
  setPickedColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const avaliableColors = [
    "rgb(131, 243, 248)",
    "rgb(182, 210, 135)",
    "rgb(157, 153, 209)",
    "rgb(128, 176, 240)",
    "rgb(216, 150, 149)",
    "rgb(185, 255, 215)",
    "rgb(254, 207, 228)",
    "rgb(220, 255, 140)",
  ];

  const handleOnClick = (color: string) => {
    setPickedColor(color);
  };

  return (
    <Container>
      {avaliableColors.map((color, index) => (
        <Color
          key={`color-${index}`}
          $colorValue={color}
          onClick={() => handleOnClick(color)}
          $isDisabled={pickedColor !== color}
        />
      ))}
    </Container>
  );
};
