import { Box } from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CardsFeature from "./CardsFeature";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import InfoCards from "./InfoCards";
import PaymentFeature from "./PaymentFeature";
import Stats from "./Stats";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <InfoCards />
      <PaymentFeature />
      <CardsFeature />
      <Stats />
      <GetStarted />
      <Footer />
    </Box>
  );
};

export default Home;
