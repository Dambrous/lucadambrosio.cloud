import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "@tanstack/react-router";
import { theme } from "../../theme";

export const NavbarLink = styled(Link)(() => ({
  color: "black",
  textDecoration: "none",
}));

// SE NON VA BENE BISOGNA CAMBIARE IL TEXTALIOGN PERCHÈ NON FA USARE MARGIN NE PADDING--> USARE STACK O LIST
export const DrawerLink = styled(Link)(() => ({
  color: "black",
  textDecoration: "none",
  textAlign: "right",
  marginRight: 20,
}));

export const TypographyDateEducation = styled(Typography)(() => ({
  [theme.breakpoints.up("md")]: {
    fontSize: 27,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));
