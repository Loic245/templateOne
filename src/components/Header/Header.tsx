import { Box, Typography } from "@mui/material";
import useStyles from "./style";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h3" style={{ color: "#b2a9ab" }}>logo</Typography>
      <MenuIcon style={{ fontSize : "3rem" }} />
    </Box>
  )
}

export default Header