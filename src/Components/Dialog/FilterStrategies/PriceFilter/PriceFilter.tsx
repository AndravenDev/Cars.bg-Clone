import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useFilters } from "../../../../Context/filter-context";
import { Listing } from "../../../../Interfaces";

export const PriceFilter = () => {
  const [value, setValue] = useState<number[]>([0, 100000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const filters = useFilters();

  const submit = () => {
    console.log("filter value ", value);
    filters.setFilters({
      price: {
        value: value,
        filterFunction: (car: Listing) => {
          return car.price > value[0] && car.price < value[1];
        },
      },
    });
  };

  return (
    <Box sx={{ width: 350, padding: "40px" }}>
      <Slider
        sx={{ paddingTop: "80px" }}
        getAriaLabel={() => "Price range"}
        value={filters.filters?.price?.value ?? value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={100000}
      />
      <DialogActions>
        <Button onClick={submit}>Apply</Button>
      </DialogActions>
    </Box>
  );
};
