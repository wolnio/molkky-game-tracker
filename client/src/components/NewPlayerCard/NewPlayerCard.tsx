import { FC, useState } from "react";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { Input } from "../common/Input.styles";
import { Container, IndexNumber, TempButton } from "./NewPlayerCard.style";

export type PlayerFormFields = {
  title: string;
  players: {
    name: string;
    color: string;
  }[];
};

type NewPlayerCardProps = {
  index: number;
  onDeleteItem: (index: number) => void;
  register: UseFormRegister<PlayerFormFields>;
  getValues: UseFormGetValues<PlayerFormFields>;
};

export const NewPlayerCard: FC<NewPlayerCardProps> = ({
  index,
  onDeleteItem,
  register,
  getValues,
}) => {
  const [pickedColor, setPickedColor] = useState<string>("rgb(254, 207, 228)");
  const rgbNumericValues = pickedColor.substring(4, pickedColor.length - 1);

  return (
    <Container $choosedBgColor={rgbNumericValues}>
      <IndexNumber>{index + 1}</IndexNumber>
      <Input
        placeholder="Name"
        readOnly={index === 0}
        {...register(`players.${index}.name`, {
          required: true,
        })}
        maxLength={15}
        defaultValue={getValues(`players.${index}.name`)}
      />
      <ColorPicker pickedColor={pickedColor} setPickedColor={setPickedColor} />
      {!(index === 0) && (
        <TempButton onClick={() => onDeleteItem(index)}>Delete</TempButton>
      )}
    </Container>
  );
};
