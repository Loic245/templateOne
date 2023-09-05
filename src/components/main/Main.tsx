import Header from "../Header"
import { Box } from "@mui/material"
import FirstComponent from "../firstComponent"
import SecondComponent from "../secondComponent"
import ThirdComponent from "../thirdComponent"
import FourthComponent from "../fourthComponent"
import useStyles from "./style"

const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Header />
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
    </Box>
  )
}

export default Main