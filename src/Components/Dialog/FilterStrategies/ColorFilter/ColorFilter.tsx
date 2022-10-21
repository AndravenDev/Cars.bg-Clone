import Chip from "@mui/material/Chip";

interface ColorFilterProps {
  onClose: () => void;
}

export const ColorFilter = ({ onClose }: ColorFilterProps) => {
  return (
    <div>
      <Chip label="Black" />
      <Chip label="White" />
      <Chip label="Blue" />
      <Chip label="Red" />
      <Chip label="Green" />
      <Chip label="Yellow" />
    </div>
  );
};
