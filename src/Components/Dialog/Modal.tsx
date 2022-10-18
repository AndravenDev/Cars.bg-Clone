import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FilterStrategy } from "./FilterDialogInterfaces/FilterStrategy";
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

const getFilterComponent = (currentFilter: string) => {
  const filters: FilterStrategy = {
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
  return filters[currentFilter as keyof FilterStrategy];
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
