import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  BodyTypeFilter,
  BrandFilter,
  FuelFilter,
  GearboxFilter,
  PriceFilter,
  YearFilter,
  LocationFilter,
  ColorFilter,
  DoorCountFilter,
  HorsepowerFilter,
  PublishDateFilter,
  ConditionFilter,
} from "./FilterStrategies";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentFilter: string;
}

interface Strategy {
  bodyType: () => JSX.Element;
  brand: () => JSX.Element;
  fuel: () => JSX.Element;
  gearbox: () => JSX.Element;
  price: () => JSX.Element;
  year: () => JSX.Element;
  location: () => JSX.Element;
  color: () => JSX.Element;
  doorCount: () => JSX.Element;
  horsepower: () => JSX.Element;
  publishedDate: () => JSX.Element;
  condition: () => JSX.Element;
}

const getFilterComponent = (currentFilter: string) => {
  const filters: Strategy = {
    bodyType: () => <BodyTypeFilter />,
    brand: () => <BrandFilter />,
    fuel: () => <FuelFilter />,
    gearbox: () => <GearboxFilter />,
    price: () => <PriceFilter />,
    year: () => <YearFilter />,
    location: () => <LocationFilter />,
    color: () => <ColorFilter />,
    doorCount: () => <DoorCountFilter />,
    horsepower: () => <HorsepowerFilter />,
    publishedDate: () => <PublishDateFilter />,
    condition: () => <ConditionFilter />,
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
