import Chip from "@mui/material/Chip";

interface BodyTypeFilterProps {
  onClose: () => void;
}

export const BodyTypeFilter = ({ onClose }: BodyTypeFilterProps) => {
  return (
    <div>
      <Chip label="Hatchback" />
      <Chip label="Sedan" />
      <Chip label="Wagon" />
    </div>
  );
};
