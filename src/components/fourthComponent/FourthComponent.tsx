import { Box, Typography } from "@mui/material"
import useStyles from "./style"

const FourthComponent = () => {
    const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Typography variant="h6" className={classes.text}>Sample text. Click to select the Text Element.</Typography>
        <Typography variant="h6" className={classes.text}> <u>Website Templates</u> created with <u>Website Builder Software</u> . </Typography>
    </Box>
  )
}

export default FourthComponent