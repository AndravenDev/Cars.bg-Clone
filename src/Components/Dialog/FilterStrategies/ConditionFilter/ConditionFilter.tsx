import Chip from "@mui/material/Chip";
import { useCriterias } from "../../../../Context/criteria-context";

interface ConditionFilterProps {
  onClose: () => void;
}

export const ConditionFilter = ({ onClose }: ConditionFilterProps) => {
  const criterias = useCriterias();
  return (
    <div>
      {criterias.criterias.condition?.map((condition) => {
        return <Chip label={condition} key={condition} />;
      })}
    </div>
  );
};
