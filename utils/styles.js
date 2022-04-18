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
    fontSize: "1rem",
    fontWeight: "normal",
    margin: "0 -.5rem 0 .2rem",
    transition: "all 0.3s ease-in-out",
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

  navbarSideIcon: {
    color: "#006d77",
    backgroundColor: "#83c5be",
    padding: "0.1rem",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#006d77",
      color: "white",
      transition: "all 0.3s ease-in-out",
    },
  },

  toolbar: {
    justifyContent: "space-between",
    paddingLeft: "10px",
    paddingRight: "0",
  },

  navCartAdmin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "-40rem",
  },

  navbarButtonIcon: {
    color: "#000",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#006d77",
      transition: "all 0.3s ease-in-out",
    },
    "&:focus": {
      backgroundColor: "#006d77",
    },
    "&:active": {
      backgroundColor: "#006d77",
    },
  },
  menuButton: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: 0,
    paddingRight: 0,
  },

  editProductButton: {
    color: "#006d77",
    backgroundColor: "#83c5be",
    paddingLeft: "1.1rem",
    paddingTop: ".4rem",
    paddingBottom: ".5rem",

    "&:hover": {
      backgroundColor: "#006d77",
      color: "white !important",
      transition: "all 0.3s ease-in-out",
    },
    "&:focus": {
      backgroundColor: "#006d77",
    },
    "&:active": {
      backgroundColor: "#006d77",
    },
  },
  deleteProductButton: {
    color: "#83c5be",
    backgroundColor: "Red",
    paddingLeft: "1rem",
    paddingTop: ".35rem",
    paddingBottom: ".35rem",

    "&:hover": {
      backgroundColor: "#006d77",
      color: "white !important",
      transition: "all 0.3s ease-in-out",
    },
    "&:focus": {
      backgroundColor: "#006d77",
    },
    "&:active": {
      backgroundColor: "#006d77",
    },
  },
  main: {
    minHeight: "80vh",
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

  mt1: { marginTop: "1rem" },

  // search
  searchSection: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  searchForm: {
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
    paddingTop: "6px",
    paddingBottom: "5px",
    borderRadius: "0 5px 5px 0",

    "&:hover": {
      backgroundColor: "#006d77",
      color: "white",
      transition: "all 0.3s ease-in-out",
    },
  },
  sort: {
    marginRight: 5,
  },
  rating: {
    paddingLeft: "0",
  },
  ratingIcon: {
    color: "#006d77",
    "&:hover": {
      backgroundColor: "black",
      transition: "all 0.3s ease-in-out",
    },
  },
  addToCardButton: {
    backgroundColor: "#83c5be",
    color: "#006d77",
    paddingTop: "6px",
    paddingBottom: "5px",
    borderRadius: 3,

    "&:hover": {
      backgroundColor: "#006d77",
      color: "white !important",
      transition: "all 0.3s ease-in-out",
    },
  },
  footer: {
    padding: "2rem 0",
    backgroundColor: "#111",
    textAlign: "center",
    margin: "0 auto",
  },
  footerText: {
    color: "#c1e2df",
    textAlign: "center",
  },
  footerLink: {
    color: "#006d77",
    cursor: "pointer",
  },

  fullContainer: { height: "100vh" },
}));
export default useStyles;
