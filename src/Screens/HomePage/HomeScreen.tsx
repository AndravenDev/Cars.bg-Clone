import { useEffect, useState } from "react";
import { OfferCard } from "../../Components/OfferCard/OfferCard";
import { Listing } from "../../Interfaces";
import styles from "./HomePage.module.scss";
import HistoryIcon from "@mui/icons-material/History";
import { Filters, useFilters } from "../../Context/filter-context";
import { FiltersRow } from "../../Components/Filter/FIltersRow";

export const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsloading] = useState(true);

  const filters = useFilters();

  console.log(filters.filters);

  const applyFilters = (listings: Listing[], filters?: Filters): Listing[] => {
    let result: Listing[] = listings;

    if (filters) {
      for (const filter in filters) {
        const currentFilter = filters[filter as keyof typeof filters];
        if (currentFilter !== null) {
          result = listings.filter(currentFilter.filterFunction);
          console.log("nakraq ", result);
        }
      }
    }

    return result;
  };

  useEffect(() => {
    setIsloading(true);
    fetch("https://localhost:7133/cars")
      .then((data) => data.json())
      .then((res: Listing[]) => {
        const currentFilters = filters.filters;

        setListings(applyFilters(res, currentFilters));

        setIsloading(false);
      });
  }, [filters.filters]);

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.prevSearches}>
        <HistoryIcon className={styles.historyIcon} />
        Предишни търсения (4)
      </div>
      <FiltersRow />
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
