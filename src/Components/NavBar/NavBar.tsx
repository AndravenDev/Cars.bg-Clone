import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <AppBar position="sticky" className={styles.navbar}>
      <Container maxWidth="xl"></Container>
    </AppBar>
  );
};
