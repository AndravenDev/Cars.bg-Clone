import { useEffect, useState } from "react";
import { OfferCard } from "../../Components/OfferCard/OfferCard";
import { Listing } from "../../Interfaces";
import styles from "./HomePage.module.scss";
import HistoryIcon from "@mui/icons-material/History";
import { Filters, useFilters } from "../../Context/filter-context";
import { FiltersRow } from "../../Components/Filter/FIltersRow";
import { useCriterias } from "../../Context/criteria-context";

export const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsloading] = useState(true);

  const filters = useFilters();
  const criterias = useCriterias();

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

  const applyCriterias = (listings: Listing[]) => {
    const bodyTypeCriterias = new Set<string>();
    const brandCriterias = new Set<string>();
    const fuelCriterias = new Set<string>();
    const locationCriteria = new Set<string>();
    const colorCriteria = new Set<string>();
    const conditionCriteria = new Set<string>();
    listings.forEach((l) => {
      bodyTypeCriterias.add(l.bodyType);
      brandCriterias.add(l.brand);
      fuelCriterias.add(l.fuel);
      locationCriteria.add(l.location);
      colorCriteria.add(l.color);
      conditionCriteria.add(l.condition);
    });
    criterias.setCriterias({
      bodyType: Array.from(bodyTypeCriterias),
      brand: Array.from(brandCriterias),
      fuel: Array.from(fuelCriterias),
      location: Array.from(locationCriteria),
      color: Array.from(colorCriteria),
      condition: Array.from(conditionCriteria),
    });
  };

  useEffect(() => {
    setIsloading(true);
    fetch("https://localhost:7133/cars")
      .then((data) => data.json())
      .then((res: Listing[]) => {
        const currentFilters = filters.filters;

        setListings(applyFilters(res, currentFilters));
        applyCriterias(res);
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
