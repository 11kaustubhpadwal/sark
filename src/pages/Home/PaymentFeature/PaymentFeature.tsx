import { Grid } from "@mui/material";
import payment from "../../../assets/payment.svg";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import { sectionContent1, sectionTitle } from "../styles";
import { paymentFeatureWrapper, sectionContent2 } from "./styles";

const PaymentFeature = () => {
  return (
    <Grid container sx={paymentFeatureWrapper} gap={10} alignItems="center">
      <Grid item sm>
        <img src={payment} alt="payment" />
      </Grid>
      <Grid item sm>
        <Heading sx={sectionTitle}>
          A fully integrated suite of payments products
        </Heading>
        <Content sx={sectionContent1}>
          Instant Payment. Electronic payments are much faster than the
          traditional methods of payments.
        </Content>
        <Content sx={sectionContent2}>
          Online invoice payment helps companies save time, are faster and save
          maximum effort for the clients. It also helps in reducing the
          excessive physical transactions.
        </Content>
      </Grid>
    </Grid>
  );
};

export default PaymentFeature;
