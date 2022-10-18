import Chip from "@mui/material/Chip";
import { useFilters } from "../../Context/filter-context";
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

  const filterContext = useFilters();

  return (
    <div className={styles.filters}>
      {filters.map((filter) => {
        return (
          <Chip
            label={filter}
            className={styles.chip}
            onClick={() => {
              filterContext.setFilters({ price: [100, 2000] });
            }}
          ></Chip>
        );
      })}
    </div>
  );
};
