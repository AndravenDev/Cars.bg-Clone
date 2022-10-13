import { Listing } from "../../Interfaces";
import styles from "./OfferCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Moment from "moment";

interface OfferCardProps {
  listing: Listing;
}
export const OfferCard = ({ listing }: OfferCardProps) => {
  const formatDate = Moment(listing.publishedDate).format("MMM Do YY");
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

      <div className={styles.mainInfo}>
        <div className={styles.title}>{listing.title}</div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};
