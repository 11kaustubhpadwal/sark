import { Box } from "@mui/material";
import card1 from "../../../../assets/card1.svg";
import card2 from "../../../../assets/card2.svg";
import { card1Alignment, cardsImageWrapper } from "./styles";

const Cards = () => {
  return (
    <Box sx={cardsImageWrapper}>
      <img src={card2} alt="card2" />
      <img
        src={card1}
        alt="card1"
        style={{ position: "relative", ...card1Alignment }}
      />
    </Box>
  );
};

export default Cards;
