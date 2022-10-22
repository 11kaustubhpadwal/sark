import { Box, Divider, Grid } from "@mui/material";
import Content from "../Text/Content";
import Heading from "../Text/Heading";
import { contactInformation, footerLinks } from "./constants";
import Contact from "./Contact";
import { divider, footerHeading, footerLink, footerWrapper } from "./styles";

const Footer = () => {
  return (
    <Box padding="5rem 7rem 2.5rem" sx={footerWrapper}>
      <Grid container gap={35}>
        <Grid item sm>
          <Heading sx={footerHeading}>
            Make secure payment & grow your online business
          </Heading>
        </Grid>
        <Grid item>
          {contactInformation.map((contact, index) => (
            <Contact
              key={`contact-info-item-footer-${index}`}
              icon={contact.icon}
              contactInfo={contact.contactInfo}
            />
          ))}
        </Grid>
      </Grid>
      <Divider sx={divider} />
      <Grid container>
        <Grid item sm>
          <Grid container gap={5}>
            {footerLinks.map((link, index) => (
              <Grid item key={`footer-nav-link-item-${index}`}>
                <Content sx={footerLink}>{link.name}</Content>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Content sx={footerLink}>
            © Copyright 2021, All Rights Reserved
          </Content>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
