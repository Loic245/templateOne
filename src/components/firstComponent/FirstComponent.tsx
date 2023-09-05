import { Box, Typography } from "@mui/material";
import useStyles from "./style";
import Pizza from "../../assets/pizza.png"
import Pasta from "../../assets/pates.png"
import Burger from "../../assets/burger.png"
import Appetizer from "../../assets/croissant.png"


const FirstComponent = () => {
    const classes = useStyles();
  return (
    <Box className={classes.container}>
            <Typography className={classes.textCenterBold}><b>Made fresh to order</b></Typography>
            <Typography className={classes.textCenter}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</Typography>
            <div className={classes.displayBtn}>
                <button className={classes.viewMenu}>View menu</button>
                <button className={classes.orderOnline}>order online</button>
            </div>
            <br />
            <br />
            <Typography className={classes.textCenter}>Image from <u>Freepik</u></Typography>
            <div className={classes.displayBoxes}>
                <div className={classes.boxItem}>
                    <img src={Pizza} alt="pizza" width="50px" height="50px" className={classes.image} />
                    PIZZA
                </div>
                <div className={classes.boxItem}>
                    <img src={Pasta} alt="pate" width="50px" height="50px" className={classes.image} />
                    PASTA
                </div>
                <div className={classes.boxItem}>
                    <img src={Burger} alt="burger" width="50px" height="50px" className={classes.image} />
                    BURGERS
                </div>
                <div className={classes.boxItem}>
                    <img src={Appetizer} alt="appetizer" width="50px" height="50px" className={classes.image} />
                    APPETIZERS
                </div>
            </div>
    </Box>
  )
}

export default FirstComponent