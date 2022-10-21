import Chip from "@mui/material/Chip";
import { useCriterias } from "../../../../Context/criteria-context";

interface BrandFilterProps {
  onClose: () => void;
}

export const BrandFilter = ({ onClose }: BrandFilterProps) => {
  const criterias = useCriterias();
  return (
    <div>
      {criterias.criterias.brand?.map((brand) => {
        return <Chip key={brand} label={brand} />;
      })}
    </div>
  );
};
