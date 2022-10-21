import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

interface YearFilterProps {
  onClose: () => void;
}

export const YearFilter = ({ onClose }: YearFilterProps) => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Year range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
