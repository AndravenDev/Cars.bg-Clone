import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { PriceFilter } from "./FilterStrategies/PriceFilter";
import { BodyTypeFilter } from "./FilterStrategies/BodyTypeFilter";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentFilter: string;
}

interface Strategy {
  bodyType: () => JSX.Element;
  price: () => JSX.Element;
}

const getFilterComponent = (currentFilter: string) => {
  const filters: Strategy = {
    bodyType: () => <BodyTypeFilter />,
    price: () => <PriceFilter />,
  };
  return filters[currentFilter as keyof Strategy];
};

export const Modal = ({ isOpen, onClose, currentFilter }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{currentFilter}</DialogTitle>
      <DialogContent>
        {currentFilter ? getFilterComponent(currentFilter)() : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
