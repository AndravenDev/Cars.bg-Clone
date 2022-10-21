import Dialog from "@mui/material/Dialog";
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

export const Modal = ({ isOpen, onClose, currentFilter }: ModalProps) => {
  const getFilterComponent = (currentFilter: string) => {
    const filters: FilterStrategy = {
      bodyType: () => <BodyTypeFilter onClose={onClose} />,
      brand: () => <BrandFilter onClose={onClose} />,
      fuel: () => <FuelFilter onClose={onClose} />,
      gearbox: () => <GearboxFilter onClose={onClose} />,
      price: () => <PriceFilter onClose={onClose} />,
      year: () => <YearFilter onClose={onClose} />,
      location: () => <LocationFilter onClose={onClose} />,
      color: () => <ColorFilter onClose={onClose} />,
      doorCount: () => <DoorCountFilter onClose={onClose} />,
      horsepower: () => <HorsepowerFilter onClose={onClose} />,
      publishedDate: () => <PublishDateFilter onClose={onClose} />,
      condition: () => <ConditionFilter onClose={onClose} />,
    };
    return filters[currentFilter as keyof FilterStrategy];
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{currentFilter}</DialogTitle>
      <DialogContent>
        {currentFilter ? getFilterComponent(currentFilter)() : null}
      </DialogContent>
    </Dialog>
  );
};
