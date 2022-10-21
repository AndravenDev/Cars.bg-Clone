import Chip from "@mui/material/Chip";
import { useCriterias } from "../../../../Context/criteria-context";

interface ColorFilterProps {
  onClose: () => void;
}

export const ColorFilter = ({ onClose }: ColorFilterProps) => {
  const criterias = useCriterias();
  return (
    <div>
      {criterias.criterias.color?.map((color) => {
        return <Chip label={color} key={color} />;
      })}
    </div>
  );
};
