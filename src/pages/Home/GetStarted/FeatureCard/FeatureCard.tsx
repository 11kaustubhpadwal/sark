import { Box } from "@mui/material";
import Content from "../../../../components/Text/Content";
import Heading from "../../../../components/Text/Heading";
import {
  featureCardContent,
  featureCardTitle,
  featureCardWrapper,
} from "./styles";
import { FeatureCardType } from "./types";

const FeatureCard = ({ icon, title, content }: FeatureCardType) => {
  return (
    <Box sx={featureCardWrapper}>
      <img src={icon} alt="feature" />
      <Heading sx={featureCardTitle}>{title}</Heading>
      <Content sx={featureCardContent}>{content}</Content>
    </Box>
  );
};

export default FeatureCard;
