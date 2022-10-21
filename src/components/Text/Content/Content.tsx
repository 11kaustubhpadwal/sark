import { Box, BoxProps } from "@mui/material";
import { content } from "./styles";

const Content: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box sx={{ ...content, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

export default Content;
