import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#e0e0e0",
    maxWidth: "71% ",
    margin: "0 auto",

    "& a": {
      color: "#000",
      marginLeft: 10,
      textDecoration: "none",
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navbarButton: {
    color: "#006d77",
    textTransform: "none",

    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
    },
    "&:focus": {
      backgroundColor: "transparent",
      color: "black",
    },
    "&:active": {
      backgroundColor: "transparent",
      color: "black",
    },
  },

  // navbarSideIcon: {
  //   backgroundColor: "#83c5be",
  //   padding: "10px",
  // },

  navbarButtonIcon: {
    color: "#000",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#006d77",
    },
    "&:focus": {
      backgroundColor: "#006d77",
    },
    "&:active": {
      backgroundColor: "#006d77",
    },
  },
  navbarButtonText: {
    color: "#006d77",
    textTransform: "none",
  },
  // grow: {
  //   flexGrow: 1,
  // },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: "100%",
    maxWidth: 800,
    margin: "0 auto",
  },

  transparentBackgroud: {
    backgroundColor: "transparent",
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
  reviewForm: {
    maxWidth: 800,
    width: "100%",
  },
  reviewItem: {
    marginRight: "1rem",
    borderRight: "1px #808080 solid",
    paddingRight: "1rem",
  },
  toolbar: {
    justifyContent: "space-between",
    paddingLeft: "10px",
    paddingRight: "0",
  },

  navCartAdimn: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "-100px",
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: "1rem" },
  // search
  searchSection: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  searchForm: {
    border: "1px solid #83c5be",
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: "#006d77",
    "& ::placeholder": {
      color: "#606060",
    },
  },
  iconButton: {
    backgroundColor: "#83c5be",
    padding: 5,
    borderRadius: "0 5px 5px 0",
    "& span": {
      color: "#000000",
    },
  },
  sort: {
    marginRight: 5,
  },

  fullContainer: { height: "100vh" },
  // mapInputBox: {
  //   position: "absolute",
  //   display: "flex",
  //   left: 0,
  //   right: 0,
  //   margin: "10px auto",
  //   width: 300,
  //   height: 40,
  //   "& input": {
  //     width: 250,
  //   },
  // },
}));
export default useStyles;
