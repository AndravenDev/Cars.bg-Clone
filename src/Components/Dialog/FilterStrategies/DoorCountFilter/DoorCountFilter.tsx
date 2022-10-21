import Chip from "@mui/material/Chip";

interface DoorCountFilterProps {
  onClose: () => void;
}

export const DoorCountFilter = ({ onClose }: DoorCountFilterProps) => {
  return (
    <div>
      <Chip label="2" />
      <Chip label="4" />
    </div>
  );
};
