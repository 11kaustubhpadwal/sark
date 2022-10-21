import { Button, Grid } from "@mui/material";
import logo from "../../assets/logo.svg";
import Content from "../Text/Content";
import { navBarLinks } from "./constants";
import {
  getYourCardButton,
  navLinkItem,
  signInButton,
  signInText,
} from "./styles";

const Navbar = () => {
  return (
    <Grid
      container
      gap={8}
      alignItems="center"
      padding="2rem 7rem"
      sx={{ background: "#E2ECEC" }}
    >
      <Grid item>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item sm>
        <Grid container alignItems="center" gap={6}>
          {navBarLinks.map((link, index) => (
            <Grid item key={`navbar-link-item-${index}`}>
              <Content sx={navLinkItem}>{link.name}</Content>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Button sx={signInButton}>
          <Content sx={signInText}>Sign in</Content>
        </Button>
        <Button sx={getYourCardButton}>
          <Content sx={{ fontWeight: 500 }}>Get your card</Content>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
