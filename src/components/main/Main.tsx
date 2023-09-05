import Header from "../pageOne/Header"
import { Box } from "@mui/material"
import FirstComponent from "../pageOne/firstComponent"
import SecondComponent from "../pageOne/secondComponent"
import ThirdComponent from "../pageOne/thirdComponent"
import FourthComponent from "../pageOne/fourthComponent"
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