import {
  Grid,
  Typography,
  Divider,
  Fade,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { Navbar } from "./Navbar";
import { NavbarLink } from "../styles/navbar/navbar";

export function About() {
  return (
    <div>
      <Navbar />
      <Fade in={true} timeout={2000}>
        <Box>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h3">About</Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                fontFamily: "Roboto_Condensed",
                fontWeight: 400,
              }}
            >
              I'm often chased by bugs like they're my shadow, but unlike Peter
              Pan, I don't have a coding fairy to help me fly out of trouble.
              Sometimes developer and huge nerd. Now at{" "}
              <NavbarLink
                to={"https://www.rapsodoo.com/it"}
                target="_blank"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  borderBottom: "1px solid black",
                  paddingBottom: "2px",
                  "&:hover": {
                    fontWeight: 600,
                    borderBoborderBottomttomColor: "4px solid black",
                  },
                }}
              >
                Rapsodoo.
              </NavbarLink>
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ marginTop: 4 }}>
            <Grid item xs={12} md={6} lg={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                Hello, everyone! My name is Luca D'Ambrosio, and I'm thrilled to
                have the opportunity to introduce myself. At twenty years old, I
                hail from the beautiful town of Pescara in Abruzzo, Italy, born
                on July 25, 2001.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                I kick-started my journey into the world of technology by
                obtaining my high school diploma from the esteemed "Galileo
                Galilei Scientific High School". It was during this time that my
                passion for IT truly ignited. Eager to explore the endless
                possibilities of programming, I knew I had found my future and
                my greatest passion.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                Immediately after graduating, I embarked on an exciting
                adventure at the University of L'Aquila, where I delved into the
                captivating studies of "Computer and Software Engineering". The
                program opened up a world of opportunities for me, and I
                couldn't wait to immerse myself in this fascinating field.
                Within a year, my thirst for practical experience led me to the
                vibrant city of Rome.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                I landed an incredible role as a Back-End Web Developer at{" "}
                <NavbarLink
                  to={"https://www.rapsodoo.com/it"}
                  target="_blank"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    borderBottom: "1px solid black",
                    paddingBottom: "2px",
                    "&:hover": {
                      fontWeight: 600,
                      borderBoborderBottomttomColor: "4px solid black",
                    },
                  }}
                >
                  Rapsodoo
                </NavbarLink>
                , a renowned company. It has been an exhilarating journey so
                far, working alongside talented professionals and contributing
                to the development of cutting-edge web solutions.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                My programming journey has been enriched by my experiences with
                Python, JavaScript, HTML, CSS, GitHub, Docker, and Java. I find
                great joy in mastering these tools, and they have become an
                integral part of my skill set. Furthermore, I am continually
                expanding my horizons by studying other languages such as
                TypeScript and ReactJS in my spare time. I believe in
                comprehensive knowledge, and I am determined to excel not only
                in back-end development but also in the exciting world of
                front-end programming.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                Navigating through the challenges of university education, I
                made a bold decision to adapt to the changing circumstances.
                Unable to follow traditional in-person training, I opted for a
                "telematic" approach, continuing my studies in Computer
                Engineering with a specific focus on databases at "eCampus
                University". This decision has allowed me to continue my
                educational journey while embracing the latest advancements in
                technology.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                In addition to my technical skills, I bring a strong work ethic,
                problem-solving abilities, and meticulous attention to detail to
                every project I undertake. I thrive in collaborative
                environments, valuing effective communication and teamwork as
                essential ingredients for success.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: "Roboto_Condensed" }}
              >
                I am thrilled about the prospect of joining a dynamic and
                forward-thinking organization, where I can apply my skills, fuel
                my passion for technology, and contribute to groundbreaking
                projects. I am confident that my diverse experiences, relentless
                drive for growth, and unwavering commitment make me an excellent
                fit for any team.
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: 4 }} />
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h4">Experience</Typography>
              <Typography sx={{ marginTop: 2 }}>
                Software Engineer · Rapsodoo
              </Typography>
              <List>
                <ListItem sx={{ pl: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    2021 - Present
                  </Typography>
                </ListItem>
              </List>
              <Typography>Skills used</Typography>
              <List>
                <ListItem sx={{ pl: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Python & Javascript (Owl Framework)
                  </Typography>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Postgresql (with object relational mapping)
                  </Typography>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    GitHub
                  </Typography>
                </ListItem>

                <ListItem sx={{ pl: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Odoo (ORM, Workflows, Report Engine, Bi, AI)
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider
            sx={{
              height: 1,
              width: 100,
              backgroundColor: "var(--hr-color)",
              margin: "3rem auto",
            }}
          />
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h4">About the site @Dambrous</Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto_Condensed",
                  fontWeight: 400,
                  marginTop: 2,
                }}
              >
                The development of this website can be consulted on{" "}
                <NavbarLink
                  to={"https://github.com/Dambrous/lucadambrosiopy"}
                  target="_blank"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    borderBottom: "1px solid black",
                    paddingBottom: "2px",
                    "&:hover": {
                      fontWeight: 600,
                      borderBoborderBottomttomColor: "4px solid black",
                    },
                  }}
                >
                  GitHub
                </NavbarLink>
                .
              </Typography>
              <List>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Designed and coded on a Dell-Latitude in Italy
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Coded with PyCharm
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Hosted on Aruba
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Roboto_Condensed",
                    }}
                  >
                    Technologies: Flask, MySQLite3, Javascript, ReactJS ,
                    Typescript, Spline
                  </Typography>
                </ListItem>
              </List>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 8,
                  fontFamily: "Roboto_Condensed",
                  textAlign: "center",
                }}
              >
                You can find more all my projects in my{" "}
                <NavbarLink
                  to={"https://github.com/Dambrous"}
                  target="_blank"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    borderBottom: "1px solid black",
                    paddingBottom: "2px",
                    "&:hover": {
                      fontWeight: 600,
                      borderBoborderBottomttomColor: "4px solid black",
                    },
                  }}
                >
                  GitHub profile.
                </NavbarLink>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Roboto_Condensed",
                  textAlign: "center",
                }}
              >
                For comments or questions, send me an email at{" "}
                <NavbarLink
                  to={"mailto:luca2001dambro@gmail.com"}
                  target="_blank"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    borderBottom: "1px solid black",
                    paddingBottom: "2px",
                    "&:hover": {
                      fontWeight: 600,
                      borderBoborderBottomttomColor: "4px solid black",
                    },
                  }}
                >
                  luca2001dambro@gmail.com.
                </NavbarLink>
              </Typography>
              <Divider sx={{ marginTop: 2 }} />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 4 }}></Box>
        </Box>
      </Fade>
    </div>
  );
}
