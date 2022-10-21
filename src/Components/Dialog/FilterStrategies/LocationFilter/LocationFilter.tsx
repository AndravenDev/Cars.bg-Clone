import Chip from "@mui/material/Chip";
import { useCriterias } from "../../../../Context/criteria-context";

interface LocationFilterProps {
  onClose: () => void;
}

export const LocationFilter = ({ onClose }: LocationFilterProps) => {
  const criteria = useCriterias();

  return (
    <div>
      {criteria.criterias.location?.map((location) => {
        return <Chip label={location} key={location} />;
      })}
    </div>
  );
};
