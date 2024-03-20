import {
  Box,
  Divider,
  Fade,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "./font.css";
import { Navbar } from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Works() {
  return (
    <div>
      <Navbar />
      <Fade in={true} timeout={2000}>
        <Box>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h3">Works</Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                fontFamily: "Roboto_Condensed",
                fontWeight: 400,
              }}
            >
              "With a background in computer engineering, I've had the
              opportunity to work on various aspects of the field. My experience
              includes software development and project management, as well as
              providing technical support to clients. I'm passionate about
              solving technical challenges and learning new technologies. I've
              worked on projects that allowed me to collaborate with
              multidisciplinary teams and contribute to the overall success of
              computer-related projects."
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Typography variant="h5">
                Lampeo
                <Divider />
              </Typography>
              <Typography>2023</Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                fontFamily: "Roboto_Condensed",
                fontWeight: 350,
              }}
            >
              "Lampeo is a short-term project following the 'DATABASE-BASED
              APPLICATIONS PROJECT' course. The e-commerce website is entirely
              built using PHP with MySQL. The use of client-side technologies
              like Javascript was prohibited as the course's main objective was
              to provide us with knowledge and proficiency in backend
              (server-side) technologies and database management. Further
              details can be found in the README.txt file. Lampeo is currently
              in the development and review phase after testing the initial
              version."
            </Typography>
            <ListItemButton>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <Box>
                <ListItemText primary="Github" />
                <Divider />
              </Box>
            </ListItemButton>
            <Box>
              <img
                src="images/lampeo1.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <img
                src="images/lampeo2.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <img
                src="images/lampeo3.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <Divider />
        </Box>
      </Fade>
      <Fade in={true} timeout={2000}>
        <Box>
          <Box sx={{ marginTop: 4 }}>
            <Box
              sx={{
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Typography variant="h5">
                Odoo - Rapsodoo
                <Divider />
              </Typography>
              <Typography>2021 - Present</Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                marginTop: 2,
                fontFamily: "Roboto_Condensed",
                fontWeight: 350,
              }}
            >
              "I am a software developer working for a company specializing in
              the sales and customization of Odoo, a comprehensive business
              management platform and ERP software. My primary role involves
              collaborating with clients to understand their specific business
              needs and then customizing the Odoo implementation to meet those
              requirements. This may include creating custom modules,
              integrating existing systems, configuring business workflows, and
              developing tailored reports.
              <Divider sx={{ marginTop: 3 }} />I am passionate about tackling
              complex challenges and ensuring that Odoo is an efficient and
              suitable resource for each client's unique needs. I work closely
              with the sales team and business consultants to ensure that the
              Odoo solution offered aligns with clients' strategies and business
              goals."
            </Typography>
            <img src="images/rapsodoo-logo.png" style={{ width: "10%" }} />

            <Box>
              <img
                src="images/odoo1.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <img
                src="images/odoo2.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <Divider />
        </Box>
      </Fade>
      <Box sx={{ marginTop: 10 }}></Box>
    </div>
  );
}
