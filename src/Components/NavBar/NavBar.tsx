import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import styles from "./NavBar.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  return (
    <AppBar position="sticky" className={styles.navbar}>
      <Container maxWidth={false}>
        <div className={styles.navIcons}>
          <span>
            <MenuIcon className={styles.hamburger} />
            <p className={styles.logo}>CARS.BG</p>
          </span>

          <span>
            <FavoriteBorderIcon className={styles.fav} />
            <ImportExportIcon className={styles.sortIcon} />
            <SearchIcon />
          </span>
        </div>
      </Container>
    </AppBar>
  );
};
