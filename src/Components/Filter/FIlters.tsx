import Chip from "@mui/material/Chip";
import { useState } from "react";
import { useFilters } from "../../Context/filter-context";
import { Modal } from "../Dialog/Modal";
import styles from "./Filters.module.scss";
export const Filters = () => {
  const filters = [
    "Automobiles",
    "Coupe",
    "Brand",
    "Fuel",
    "Gearbox",
    "Price",
    "Year",
    "Location",
    "From",
    "Color",
    "Door Count",
    "Power",
    "Extras",
    "Steering",
    "Published",
    "Condition",
  ];

  const filterContext = useFilters();
  const [open, setOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.filters}>
      <Modal isOpen={open} onClose={onClose} currentFilter={currentFilter} />
      {filters.map((filter) => {
        return (
          <Chip
            key={filter}
            label={filter}
            className={styles.chip}
            onClick={() => {
              setOpen(true);
              setCurrentFilter(filter.toLocaleLowerCase());
              filterContext.setFilters({ price: [100, 2000] });
            }}
          ></Chip>
        );
      })}
    </div>
  );
};
