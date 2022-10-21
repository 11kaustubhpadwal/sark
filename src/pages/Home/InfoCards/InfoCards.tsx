import { Grid } from "@mui/material";
import { information } from "./constants";
import InfoCard from "./InfoCard/InfoCard";
import { infoCardsWrapper } from "./styles";

const InfoCards = () => {
  return (
    <Grid container sx={infoCardsWrapper} gap={9}>
      {information.map((infoItem, index) => (
        <Grid item sm key={`info-card-item-${index}`}>
          <InfoCard
            icon={infoItem.icon}
            title={infoItem.title}
            content={infoItem.content}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCards;
