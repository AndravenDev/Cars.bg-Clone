import { useEffect, useState } from "react";
import { Filters } from "../../Components/Filter/FIlters";
import { OfferCard } from "../../Components/OfferCard/OfferCard";
import { Listing } from "../../Interfaces";
import styles from "./HomePage.module.scss";
import HistoryIcon from "@mui/icons-material/History";

export const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    fetch("https://localhost:7133/cars")
      .then((data) => data.json())
      .then((res) => {
        setListings(res);
        setIsloading(false);
      });
  }, []);

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
