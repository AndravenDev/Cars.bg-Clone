import Chip from "@mui/material/Chip";
import styles from "./Filters.module.scss";
export const Filters = () => {
  const arr = Array(10).fill("");
  return (
    <div>
      {arr.map(() => {
        return <Chip label="Brand"></Chip>;
      })}
    </div>
  );
};
