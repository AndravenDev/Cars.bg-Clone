import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

interface HorsepowerFilterProps {
  onClose: () => void;
}

export const HorsepowerFilter = ({ onClose }: HorsepowerFilterProps) => {
  const [value, setValue] = useState<number[]>([20, 837]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Power range"}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};
