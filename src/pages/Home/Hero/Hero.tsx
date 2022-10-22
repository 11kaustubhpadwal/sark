import { Box, Button, Grid } from "@mui/material";
import cardImg from "../../../assets/card.svg";
import { ReactComponent as HeroImg } from "../../../assets/hero.svg";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import {
  cardImgAlignment,
  heroButton,
  heroButtonText,
  heroContent,
  heroHeading,
  statsHeading,
  statsWrapper,
  verticalDivider,
} from "./styles";

const Hero = () => {
  return (
    <Grid container padding="2rem 7rem 0" sx={{ background: "#E2ECEC" }}>
      <Grid item sm>
        <Heading sx={heroHeading}>The next gen payment method.</Heading>
        <Content sx={heroContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
          massa in enim luctus. Rutrum arcu.
        </Content>
        <Button sx={heroButton}>
          <Content sx={heroButtonText}>Get your card</Content>
        </Button>
        <Grid container sx={statsWrapper} alignItems="center" pr={12}>
          <Grid item sm pr={2}>
            <Heading sx={statsHeading}>2943</Heading>
          </Grid>
          <Grid item sm>
            <Content>Cards Delivered</Content>
          </Grid>
          <Grid item ml={5} mr={5} sm>
            <Box sx={verticalDivider} />
          </Grid>
          <Grid item sm pr={2}>
            <Heading sx={statsHeading}>$1M+</Heading>
          </Grid>
          <Grid item sm>
            <Content>Transaction Completed</Content>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm>
        <HeroImg />
        <img src={cardImg} alt="card" style={cardImgAlignment} />
      </Grid>
    </Grid>
  );
};

export default Hero;
