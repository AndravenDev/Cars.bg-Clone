import Chip from "@mui/material/Chip";
import { useCriterias } from "../../../../Context/criteria-context";

interface FuelFilterProps {
  onClose: () => void;
}

export const FuelFilter = ({ onClose }: FuelFilterProps) => {
  const criterias = useCriterias();
  return (
    <div>
      {criterias.criterias.fuel?.map((fuel) => {
        return <Chip label={fuel} />;
      })}
    </div>
  );
};
