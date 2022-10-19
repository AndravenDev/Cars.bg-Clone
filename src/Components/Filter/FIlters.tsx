import Chip from "@mui/material/Chip";
import { useState } from "react";
import { Modal } from "../Dialog/Modal";
import styles from "./Filters.module.scss";
import Button from "@mui/material/Button";
import { useFilters } from "../../Context/filter-context";

export const FiltersRow = () => {
  const filters = [
    { label: "Body Type", name: "bodyType" },
    { label: "Brand", name: "brand" },
    { label: "Fuel", name: "fuel" },
    { label: "Gearbox", name: "gearbox" },
    { label: "Price", name: "price" },
    { label: "Year", name: "year" },
    { label: "Location", name: "location" },
    { label: "Color", name: "color" },
    { label: "Door Count", name: "doorCount" },
    { label: "Horsepower", name: "horsepower" },
    { label: "Published", name: "publishedDate" },
    { label: "Condition", name: "condition" },
  ];

  const [open, setOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");
  const filterContext = useFilters();

  const onClose = () => {
    setOpen(false);
  };

  const clearFilters = () => {
    filterContext.clearFilters();
  };

  return (
    <div className={styles.filters}>
      <Modal isOpen={open} onClose={onClose} currentFilter={currentFilter} />
      {filters.map((filter) => {
        return (
          <Chip
            key={filter.name}
            label={filter.label}
            className={styles.chip}
            onClick={() => {
              setOpen(true);
              setCurrentFilter(filter.name);
            }}
          ></Chip>
        );
      })}
      <Button onClick={clearFilters}>Clear</Button>
    </div>
  );
};
