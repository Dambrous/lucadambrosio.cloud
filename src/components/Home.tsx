import {
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import "./font.css";
import { Navbar } from "./Navbar";
import { NavbarLink } from "../styles/navbar/navbar";
import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

type YearsProjectsHome = {
  [year: string]: { project: string; date: string; path: string }[];
};

const year_and_projects_home: YearsProjectsHome = {
  "2020": [
    {
      project:
        "Computer and Software Engineering - Università degli Studi dell'Aquila",
      date: "Oct 1",
      path: "http://www.ing.univaq.it/cdl/mostra_corso.php?codice=I3N",
    },
  ],
  "2021": [
    {
      project: "Joined Rapsodoo as back-end developer",
      date: "Nov 29",
      path: "https://www.rapsodoo.com/it",
    },
  ],
  "2022": [
    {
      project: "Pycon",
      date: "June 2-5",
      path: "https://2023.pycon.it/it/news/pycon-italia-2022-is-coming-back",
    },
    {
      project: "Computer and Software Engineering - Ecampus",
      date: "Jan 15",
      path: "https://www2.uniecampus.it/facolta/facolta-ingegneria/corso-laurea-triennale-ingegneria-informatica-automazione-database.asp",
    },
  ],
  "2023": [
    {
      project: "Lampeo",
      date: "Sep 1",
      path: "https://github.com/Dambrous/lampeo",
    },
    {
      project: "Pycon",
      date: "May 25-28",
      path: "https://www.nephila.digital/it/blog/pycon-italia-2023/",
    },
  ],
};

export function Home() {
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <>
      <>
        <Navbar />
        <Box sx={{ marginTop: 4 }}>
          <Box>
            {/* <Spline scene="https://prod.spline.design/CvKT2DJimYFST1Y8/scene.splinecode" /> */}
            <Grid container columns={{ xs: 2, sm: 2, md: 12 }} spacing={3}>
              <Grid item xs={2} sm={2} md={6}>
                <Stack spacing={2} justifyContent="center" alignItems="center">
                  <Fade in={checked} timeout={1000}>
                    <Box>
                      <Avatar
                        src="images/avatar2.jpg"
                        sx={{ width: 200, height: 200 }}
                      ></Avatar>
                    </Box>
                  </Fade>
                  <Grow in={checked} timeout={2000}>
                    <Box>
                      <Typography
                        sx={{ fontFamily: "Roboto_Condensed", fontSize: 18 }}
                      >
                        I'm often chased by bugs like they're my shadow, but
                        unlike Peter Pan, I don't have a coding fairy to help me
                        fly out of trouble. Sometimes developer and huge nerd.
                        Now at <strong>Rapsodoo</strong>.
                      </Typography>
                    </Box>
                  </Grow>
                  <List
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                    }}
                  >
                    <Grow in={checked} timeout={2500}>
                      <NavbarLink
                        to={"https://github.com/Dambrous"}
                        target="_blank"
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <GitHubIcon />
                          </ListItemIcon>
                          <Box>
                            <ListItemText primary="Github" />
                            <Divider />
                          </Box>
                        </ListItemButton>
                      </NavbarLink>
                    </Grow>
                    <Grow in={checked} timeout={3500}>
                      <NavbarLink
                        to={"https://www.linkedin.com/in/lucadambrosio-dev/"}
                        target="_blank"
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <LinkedInIcon />
                          </ListItemIcon>
                          <Box>
                            <ListItemText primary="Linkedin" />
                            <Divider />
                          </Box>
                        </ListItemButton>
                      </NavbarLink>
                    </Grow>
                    <Grow in={checked} timeout={3000}>
                      <NavbarLink
                        to={"https://www.instagram.com/lucadambrosio___/"}
                        target="_blank"
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <InstagramIcon />
                          </ListItemIcon>
                          <Box>
                            <ListItemText primary="Instagram" />
                            <Divider />
                          </Box>
                        </ListItemButton>
                      </NavbarLink>
                    </Grow>
                    <Grow in={checked} timeout={4000}>
                      <NavbarLink to={"mailto:luca2001dambro@gmail.com"}>
                        <ListItemButton>
                          <ListItemIcon>
                            <MailOutlineRoundedIcon />
                          </ListItemIcon>
                          <Box>
                            <ListItemText primary="luca2001dambro@gmail.com" />
                            <Divider />
                          </Box>
                        </ListItemButton>
                      </NavbarLink>
                    </Grow>
                  </List>
                  <Grow in={checked} timeout={4500}>
                    <Box
                      sx={{
                        marginTop: 4,
                        display: "center",
                        justifyContent: "center",
                      }}
                    >
                      <NavbarLink
                        to={"documents/cv_luca_dambrosio.pdf"}
                        target="_blank"
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<CloudDownloadIcon />}
                        >
                          Download CV
                        </Button>
                      </NavbarLink>
                    </Box>
                  </Grow>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={2} md={6}>
                <Stack>
                  {Object.keys(year_and_projects_home)
                    .sort((a, b) => parseInt(b) - parseInt(a)) // Ordinamento decrescente degli anni
                    .map((year) => (
                      <Fade in={checked} timeout={5000}>
                        <Box key={year} sx={{ marginTop: 4 }}>
                          <Typography variant="h4">{year}</Typography>
                          {year_and_projects_home[year].map(
                            ({ project, date, path }, index) => (
                              <Box
                                key={index}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginTop: 2,
                                }}
                              >
                                <NavbarLink to={path} target="_blank">
                                  <Typography
                                    sx={{
                                      fontFamily: "Roboto_Condensed",
                                      fontSize: 18,
                                      maxWidth: 350,
                                    }}
                                  >
                                    {project}
                                    <Divider />
                                  </Typography>
                                </NavbarLink>
                                <Typography sx={{ marginLeft: "auto" }}>
                                  {date}
                                </Typography>
                              </Box>
                            )
                          )}
                        </Box>
                      </Fade>
                    ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider sx={{ marginTop: 12 }} />
        <Typography
          sx={{ marginTop: 4, fontFamily: "Roboto_Condensed", fontSize: 15 }}
        >
          &lt;3
        </Typography>
      </>
    </>
  );
}
