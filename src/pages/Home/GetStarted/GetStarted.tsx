import { Button, Grid } from "@mui/material";
import Heading from "../../../components/Text/Heading";
import { features } from "./constants";
import FeatureCard from "./FeatureCard";
import {
  getStartedInfo,
  getStartedTitle,
  joinButton,
  learnMoreButton,
} from "./styled";

const GetStarted = () => {
  return (
    <Grid container padding="5.5rem 7rem">
      <Grid item sm={5} pr={7}>
        <Heading sx={getStartedTitle}>Ready to get started?</Heading>
        <Heading sx={getStartedInfo}>
          Create custom landing pages with Rareblocks that converts more
          visitors than any website. With lots of unique blocks, you can easily
          build a page.
        </Heading>
        <Button sx={joinButton}>
          <Heading sx={{ fontWeight: 700 }}>Join now</Heading>
        </Button>
        <Button sx={learnMoreButton}>
          <Heading sx={{ fontWeight: 700 }}>Learn more</Heading>
        </Button>
      </Grid>
      <Grid item sm={7} pl={3}>
        <Grid container gap={3}>
          {features.map((feature, index) => (
            <Grid item key={`get-started-feature-card-item-${index}`} sm>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetStarted;
