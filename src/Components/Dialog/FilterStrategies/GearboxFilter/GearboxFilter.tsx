import Chip from "@mui/material/Chip";

interface GearboxFilterProps {
  onClose: () => void;
}

export const GearboxFilter = ({ onClose }: GearboxFilterProps) => {
  return (
    <div>
      <Chip label="Automatic" />
      <Chip label="Manual" />
    </div>
  );
};
