interface BtnProps {
  value: number;
}

export const RoundButton = ({ value }: BtnProps) => {
  return <button>{value}</button>;
};
