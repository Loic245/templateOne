import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/background_component_three.jpg";

const useStyles = makeStyles({
    container: {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "120% 110vh",
        width: "100%",
        height: "80vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem"
    },
    gridContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.5rem"
    },
    gridItem: {
        background: "#fff",
        padding: "2rem",
        width: "18rem",
        height: "18rem",
    },
    textTitle: {
        fontWeight: "bolder",
    },
    call: {
        color: "#e73d0c",
        padding: "1.5rem 0",
        "&:hover": {
            cursor: "pointer",
            color: "#000"
        }
    }
});

export default useStyles;
