import Chip from "@mui/material/Chip";
import { useCriterias } from "../../../../Context/criteria-context";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface BodyTypeFilterProps {
  onClose: () => void;
}

export const BodyTypeFilter = ({ onClose }: BodyTypeFilterProps) => {
  const criterias = useCriterias();
  return (
    <>
      <div>
        {criterias.criterias?.bodyType?.map((bodyType) => {
          return (
            <Chip
              sx={{ marginRight: "10px" }}
              label={bodyType}
              key={bodyType}
            />
          );
        })}
      </div>
      <DialogActions>
        <Button onClick={onClose}>Apply</Button>
      </DialogActions>
    </>
  );
};
