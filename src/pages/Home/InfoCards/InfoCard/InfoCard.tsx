import { Box } from "@mui/material";
import Content from "../../../../components/Text/Content";
import Heading from "../../../../components/Text/Heading";
import { cardContent, cardTitle } from "./styles";
import { InfoCardType } from "./types";

const InfoCard = ({ icon, title, content }: InfoCardType) => {
  return (
    <Box>
      <img src={icon} alt="feature" />
      <Heading sx={cardTitle}>{title}</Heading>
      <Content sx={cardContent}>{content}</Content>
    </Box>
  );
};

export default InfoCard;
