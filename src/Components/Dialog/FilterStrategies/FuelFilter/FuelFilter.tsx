import Chip from "@mui/material/Chip";

interface FuelFilterProps {
  onClose: () => void;
}

export const FuelFilter = ({ onClose }: FuelFilterProps) => {
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
