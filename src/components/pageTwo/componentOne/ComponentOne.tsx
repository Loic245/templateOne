import { Box } from "@mui/material"
import useStyles from "./style"

const ComponentOne = () => {
    const classes = useStyles();
  return (
    <Box className={classes.container}>ComponentOne</Box>
  )
}

export default ComponentOne