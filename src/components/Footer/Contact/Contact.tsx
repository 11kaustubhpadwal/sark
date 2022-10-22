import { Grid } from "@mui/material";
import Heading from "../../Text/Heading";
import { contactInfoText } from "./styles";
import { ContactType } from "./types";

const Contact = ({ icon, contactInfo }: ContactType) => {
  return (
    <Grid container gap={3} mb="1.813rem" alignItems="center">
      <Grid item>
        <img src={icon} alt="contact" style={{ marginTop: ".4rem" }} />
      </Grid>
      <Grid item>
        <Heading sx={contactInfoText}>{contactInfo}</Heading>
      </Grid>
    </Grid>
  );
};

export default Contact;
