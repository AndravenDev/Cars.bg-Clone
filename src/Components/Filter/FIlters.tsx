import Chip from "@mui/material/Chip";
import styles from "./Filters.module.scss";
export const Filters = () => {
  const filters = [
    "Автомобили",
    "Купе",
    "Марка",
    "Гориво",
    "Скорости",
    "Цена",
    "Година",
    "Къде",
    "От",
    "Цвят",
    "Брой Врати",
    "Мощност",
    "Екстри",
    "Волан",
    "Публикувани",
    "Състояние",
  ];
  return (
    <div className={styles.filters}>
      {filters.map((filter) => {
        return <Chip label={filter} className={styles.chip}></Chip>;
      })}
    </div>
  );
};
