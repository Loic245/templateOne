import { makeStyles } from "@material-ui/core/styles";
import background from "../../../assets/background_component_one.jpg";

const useStyles = makeStyles({
    container: {
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "120% 110vh",
        width: "100%",
        height: "110vh",
        textAlign: "center",
    },
    textCenter: {
        color: "white",
        padding: '0 10rem 2rem 10rem !important',
        fontSize: "1.75rem !important",
    },
    textCenterBold: {
        fontSize: "3.75rem !important",
        color: "white",
        fontFamily: 'Palanquin Dark Bold !important',
        textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
        padding: '60px 0 30px 0 !important',
    },
    viewMenu: {
        background: "#fff",
        borderRadius: '2rem',
        color: "#000",
        fontWeight: 700,
        padding: "1.2rem 4.2rem",
        textTransform: "uppercase",
        fontSize: "1.2rem",
        "&:hover": {
            background: "#e73d0c",
            cursor: "pointer",
            color: "#fff",
            borderColor: "#e73d0c",
        }
    },
    orderOnline: {
        background: "transparent",
        borderRadius: '2rem',
        border: "solid 3px #fff",
        color: "#fff",
        fontWeight: 700,
        padding: "1.2rem 4.2rem",
        textTransform: "uppercase",
        fontSize: "1.2rem",
        "&:hover": {
            background: "#e73d0c",
            cursor: "pointer",
            color: "#fff",
            borderColor: "#e73d0c",
        }
    },
    displayBtn: {
        display: "flex",
        gap: "2rem",
        padding: "0 auto",
        justifyContent: "center",
    },
    displayBoxes: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        color: "#fff",
        padding: "3rem 1rem",
    },
    boxItem: {
        width: "16rem",
        height: "16rem",
        background: "#e73d0c",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: '2rem',
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.8rem"
    },
    image: {
        color: "#fff !important",
        filter: "grayscale(0) !important"
    }
});

export default useStyles;
