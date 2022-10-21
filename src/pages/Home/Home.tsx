import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import InfoCards from "./InfoCards";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <InfoCards />
    </Box>
  );
};

export default Home;
