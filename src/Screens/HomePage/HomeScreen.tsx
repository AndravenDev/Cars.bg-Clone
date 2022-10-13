import { OfferCard } from "../../Components/OfferCard/OfferCard";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  // const carOffers: string[] = [].fill("1", 10);
  const arr = new Array(100).fill("1");
  console.log(arr);
  return (
    <div className={styles.homePage}>
      {arr.map(() => {
        return <OfferCard />;
      })}
    </div>
  );
};
