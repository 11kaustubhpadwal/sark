import { Box, BoxProps } from "@mui/material";
import { heading } from "./styles";

const Heading: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box sx={{ ...heading, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

export default Heading;
