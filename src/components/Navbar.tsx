import {
  Box,
  Divider,
  Drawer,
  Fade,
  Hidden,
  IconButton,
  List,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { DrawerLink, NavbarLink } from "../styles/navbar/navbar";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ViewStreamRoundedIcon from "@mui/icons-material/ViewStreamRounded";
type PagesDictRoutes = {
  [key: string]: string;
};
const pagesDictRoutes: PagesDictRoutes = {
  Home: "/",
  Education: "/education",
  Work: "/works",
  "About Me": "/about",
};
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <Box
      sx={{
        marginTop: 5,
      }}
    >
      <Fade in={true} timeout={3000}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <NavbarLink key={"men"} to={"/"}>
            <Fade in={true} timeout={3000}>
              <Typography
                sx={{ fontFamily: "ProtestRiot-Regular", fontSize: 30 }}
              >
                @Dambrous
              </Typography>
            </Fade>
          </NavbarLink>
          <Hidden mdUp>
            <ViewStreamRoundedIcon
              sx={{ marginLeft: "auto", cursor: "pointer" }}
              fontSize="large"
              onClick={toggleMenu}
            />
          </Hidden>
          <Hidden mdDown>
            <Stack
              direction="row"
              spacing={8}
              sx={{ marginLeft: "auto", cursor: "pointer" }}
            >
              {Object.keys(pagesDictRoutes).map((page, index) => (
                <NavbarLink key={index} to={pagesDictRoutes[page]}>
                  <Typography variant="h5">{page}</Typography>
                </NavbarLink>
              ))}
            </Stack>
          </Hidden>
        </Box>
      </Fade>
      <Divider />
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        transitionDuration={500}
        variant="temporary"
        PaperProps={{ style: { width: "50%" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <IconButton sx={{ marginLeft: "auto" }} onClick={toggleMenu}>
            <CloseIcon fontSize="large" sx={{ color: "black" }} />
          </IconButton>
        </Box>
        <List>
          <Box sx={{ display: "flex" }}>
            <ListItemIcon onClick={handleMenuClick} sx={{ margin: 3 }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
              ></IconButton>
            </ListItemIcon>
          </Box>
          <Box sx={{ paddingRight: "16px" }}>
            {Object.entries(pagesDictRoutes).map(([page]) => (
              <DrawerLink to={pagesDictRoutes[page]} onClick={handleMenuClick}>
                <Typography variant="h3">{page}</Typography>
              </DrawerLink>
            ))}
          </Box>
        </List>
      </Drawer>
    </Box>
  );
}
