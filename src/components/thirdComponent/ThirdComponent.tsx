import { Box, Grid, Typography } from "@mui/material";
import useStyles from "./style"

const ThirdComponent = () => {
    const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Grid className={classes.gridContainer}>
            <Grid item className={classes.gridItem}>
                <Typography variant="h4" className={classes.textTitle}><b>FIND US</b></Typography><br />
                <Typography variant="h5">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Typography variant="h4" className={classes.textTitle}><b>HOURS</b></Typography><br />
                <Typography variant="h5"><b>Monday – Saturday</b></Typography>
                <Typography variant="h5">9am – 7pm</Typography>
                <Typography variant="h5"><b>Sunday </b></Typography>
                <Typography variant="h5">10am – 6pm</Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Typography variant="h4" className={classes.textTitle}><b>CALL US</b></Typography>
                <Typography variant="h5" className={classes.call}><u><b>1 (234) 567-891</b></u></Typography>
                <Typography variant="h5" className={classes.call}><u><b>2 (345) 333-897</b></u></Typography>
            </Grid>
        </Grid>
        <Typography variant="h5" style={{ color: "#fff" }}>Image from <u>Freepik</u></Typography>
    </Box>
  )
}

export default ThirdComponent