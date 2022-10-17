import { Listing } from "../../Interfaces";
import styles from "./OfferCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Moment from "moment";

interface OfferCardProps {
  listing: Listing;
}
export const OfferCard = ({ listing }: OfferCardProps) => {
  const formatDate = Moment(listing.publishedDate).format("MMM Do YY");
  const year = Moment(listing.produced).format("YYYY");

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.card}>
      <div className={styles.headerSection}>
        <div>
          <span>{formatDate}, </span>
          <span>{listing.condition}</span>
        </div>
        <FavoriteBorderIcon className={styles.hearthIcon} />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt="cool car" src={listing.pictureUrl} />
      </div>
      <div className={styles.price}>{numberWithCommas(listing.price)} лв.</div>
      <div className={styles.mainInfo}>
        <div className={styles.title}>{listing.title}</div>
        <div className={styles.line}></div>
        <span className={styles.basicInfo}>
          <span>{year}, </span>
          <span>{listing.fuel}, </span>
          <span>{listing.miledge} km</span>
        </span>

        <div className={styles.description}>{listing.description}</div>
        <div className={styles.publisherData}>
          <span>{listing.publisher}</span>
          <span>{listing.location}</span>
        </div>
      </div>
    </div>
  );
};
