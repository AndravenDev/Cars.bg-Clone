import Chip from "@mui/material/Chip";

interface ConditionFilterProps {
  onClose: () => void;
}

export const ConditionFilter = ({ onClose }: ConditionFilterProps) => {
  return (
    <div>
      <Chip label="New" />
      <Chip label="Second Hand" />
      <Chip label="Questionable" />
    </div>
  );
};
