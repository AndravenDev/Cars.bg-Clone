import Chip from "@mui/material/Chip";

interface LocationFilterProps {
  onClose: () => void;
}

export const LocationFilter = ({ onClose }: LocationFilterProps) => {
  return (
    <div>
      <Chip label="Varna" />
      <Chip label="Sofia" />
      <Chip label="Burgas" />
    </div>
  );
};
