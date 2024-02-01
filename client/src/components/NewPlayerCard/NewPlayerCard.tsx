import { ChangeEvent, FC, useState } from "react";
import { Player } from "../../pages/AddPlayer/AddPlayer";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { Input } from "../common/Input.styles";
import { Container, TempButton } from "./NewPlayerCard.style";

type NewPlayerCardProps = {
  data: Player;
  index: number;
  onDeleteItem: (data: Player) => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>, player: Player) => void;
};

export const NewPlayerCard: FC<NewPlayerCardProps> = ({
  data,
  index,
  onDeleteItem,
  onInputChange,
}) => {
  const [pickedColor, setPickedColor] = useState<string>("rgb(254, 207, 228)");
  const rgbNumericValues = pickedColor.substring(4, pickedColor.length - 1);

  return (
    <Container $choosedBgColor={rgbNumericValues}>
      <span>{index}</span>
      <Input
        placeholder="Name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(e, data)}
        value={data.name}
      />
      <ColorPicker pickedColor={pickedColor} setPickedColor={setPickedColor} />
      <TempButton onClick={() => onDeleteItem(data)}>Delete</TempButton>
    </Container>
  );
};
