import Chip from "@mui/material/Chip";

interface BrandFilterProps {
  onClose: () => void;
}

export const BrandFilter = ({ onClose }: BrandFilterProps) => {
  return (
    <div>
      <Chip label="BMW" />
      <Chip label="Mercedes" />
      <Chip label="Audi" />
      <Chip label="VolksWagen" />
    </div>
  );
};
