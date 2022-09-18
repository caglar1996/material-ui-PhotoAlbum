import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    paddingTop: "100px",
    paddingBottom: "60px",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "white",
    padding: "50px 0",
  },
}));

export default useStyles;
