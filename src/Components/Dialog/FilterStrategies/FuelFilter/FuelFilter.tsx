import Chip from "@mui/material/Chip";

export const FuelFilter = () => {
  return (
    <div>
      <Chip label="Diesel" />
      <Chip label="Benzin" />
      <Chip label="Gas/Benzin" />
      <Chip label="Metan" />
      <Chip label="Electricity" />
    </div>
  );
};
