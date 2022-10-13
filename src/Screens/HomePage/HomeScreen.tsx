import { useEffect, useState } from "react";
import { OfferCard } from "../../Components/OfferCard/OfferCard";
import { Listing } from "../../Interfaces";
import styles from "./HomePage.module.scss";

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
    <div className={styles.homePage}>
      {!isLoading
        ? listings.map((x) => {
            return <OfferCard key={x.carId} listing={x} />;
          })
        : null}
    </div>
  );
};
