import { makeStyles } from "@material-ui/core/styles";
import mongolfiere from "../../../assets/mongolfiere.jpg";

const useStyles = makeStyles({
    container: {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mongolfiere})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "120% 110vh",
        width: "100%",
        height: "110vh",
    },
});

export default useStyles;
