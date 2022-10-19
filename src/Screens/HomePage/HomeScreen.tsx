import { useEffect, useState } from "react";
import { Filters } from "../../Components/Filter/FIlters";
import { OfferCard } from "../../Components/OfferCard/OfferCard";
import { Listing } from "../../Interfaces";
import styles from "./HomePage.module.scss";
import HistoryIcon from "@mui/icons-material/History";
import { useFilters } from "../../Context/filter-context";

export const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsloading] = useState(true);

  const filters = useFilters();

  console.log(filters.filters);

  useEffect(() => {
    setIsloading(true);
    fetch("https://localhost:7133/cars")
      .then((data) => data.json())
      .then((res: Listing[]) => {
        const filterz = filters.filters;

        let result: Listing[] = res;

        for (const filter in filterz) {
          const currentFilter = filterz[filter as keyof typeof filterz];
          if (currentFilter !== null) {
            result = res.filter(currentFilter);
            console.log("nakraq ", result);
          }
        }
        setListings(result);
        setIsloading(false);
      });
  }, [filters.filters]);

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.prevSearches}>
        <HistoryIcon className={styles.historyIcon} />
        Предишни търсения (4)
      </div>
      <Filters />
      <div className={styles.cards}>
        {!isLoading
          ? listings.map((x) => {
              return <OfferCard key={x.carId} listing={x} />;
            })
          : null}
      </div>
    </div>
  );
};
