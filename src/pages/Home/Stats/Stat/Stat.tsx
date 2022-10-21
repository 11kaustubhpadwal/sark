import { Box } from "@mui/material";
import Heading from "../../../../components/Text/Heading";
import { statContent, statTitle } from "./styles";
import { StatType } from "./types";

const Stat = ({ title, content }: StatType) => {
  return (
    <Box>
      <Heading sx={statTitle}>{title}</Heading>
      <Heading sx={statContent}>{content}</Heading>
    </Box>
  );
};

export default Stat;
