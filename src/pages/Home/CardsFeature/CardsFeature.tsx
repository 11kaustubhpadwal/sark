import { Divider, Grid } from "@mui/material";
import avatar from "../../../assets/avatar.svg";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import { sectionContent1, sectionTitle } from "../styles";
import Cards from "./Cards";
import {
  avatarInfo,
  avatarName,
  cardsFeatureWrapper,
  testimonial,
} from "./styles";

const CardsFeature = () => {
  return (
    <Grid container alignItems="center" sx={cardsFeatureWrapper} gap={30}>
      <Grid item sm>
        <Heading sx={sectionTitle}>The backbone for internet business</Heading>
        <Content sx={sectionContent1}>
          Online payment companies are responsible for handling online or
          internetbased payment. The online payment systems.
        </Content>
        <Divider sx={{ marginBottom: "1.625rem" }} />
        <Content sx={testimonial}>
          “Simply the best. Better than all the rest. Recommend this product to
          beginners and advanced users.”
        </Content>
        <Grid container gap={2}>
          <Grid item>
            <img src={avatar} alt="avatar" />
          </Grid>
          <Grid item>
            <Content sx={avatarName}>Trevor Lane</Content>
            <Content sx={avatarInfo}>
              Director of Technology, CreativeGIG
            </Content>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm>
        <Cards />
      </Grid>
    </Grid>
  );
};

export default CardsFeature;
