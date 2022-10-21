import { Box, Grid } from "@mui/material";
import Heading from "../../../components/Text/Heading";
import { sectionTitle } from "../styles";
import { stats } from "./constants";
import Stat from "./Stat";
import { statsSectionWrapper } from "./styles";

const Stats = () => {
  return (
    <Box sx={statsSectionWrapper}>
      <Heading textAlign="center" sx={sectionTitle} mb="5.5rem">
        Join millions getting secured payment
      </Heading>
      <Grid container gap={18}>
        {stats.map((statItem, index) => (
          <Grid item key={`stat-item-${index}`} sm>
            <Stat title={statItem.title} content={statItem.content} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
