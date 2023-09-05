import { Box, Grid, Typography } from "@mui/material";
import useStyles from "./style"

const SecondComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.item}>
          <Typography variant="h4" className={classes.subtitle1}>About Us</Typography>
          <Typography variant="h6" className={classes.subtitle2}>Italy's Pizza & Pasta Company serves calzones, pasta, pizzas, salads, strombolis, and more to the Buford, GA area.</Typography>
          <br />
          <Typography variant="h4" className={classes.subtitle1}>Year Established</Typography>
          <Typography variant="h6" className={classes.subtitle2}>2010</Typography>
          <br />
          <Typography variant="h4" className={classes.subtitle1}>Products</Typography>
            <ul>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Appetizers</Typography></li>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Calzones</Typography></li>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Pizza</Typography></li>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Pasta</Typography></li>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Salads</Typography></li>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Stromboli</Typography></li>
              <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Subs</Typography></li>
            </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.item}>
          <Typography variant="h4" className={classes.subtitle1}>Services</Typography>
          <ul>
            <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Dine-in</Typography></li>
            <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Catering</Typography></li>
          </ul>
          <br />

          <Typography variant="h4" className={classes.subtitle1}>Specialties</Typography>
          <ul>
            <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Pizza</Typography></li>
            <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Pasta</Typography></li>
            <li className={classes.subtitle2}><Typography variant="h6" className={classes.subtitle2}>Burgers</Typography></li>
          </ul>
          <br />

          <Typography variant="h4" className={classes.subtitle1}>Business Hours</Typography>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography variant="h6" className={classes.subtitle2}>Mon - Thu</Typography>
              <Typography variant="h6" className={classes.subtitle2}>Fri, Sat</Typography>
              <Typography variant="h6" className={classes.subtitle2}>Sun</Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography variant="h6" className={classes.subtitle2}>11:00 am - 9:00 pm</Typography>
              <Typography variant="h6" className={classes.subtitle2}>11:00 am - 10:00 pm</Typography>
              <Typography variant="h6" className={classes.subtitle2}>12:00 pm - 9:00 pm</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SecondComponent