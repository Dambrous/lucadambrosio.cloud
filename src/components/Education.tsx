import {
  Box,
  Divider,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "./font.css";
import { Navbar } from "./Navbar";
import { TypographyDateEducation } from "../styles/navbar/navbar";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

export function Education() {
  return (
    <div>
      <Navbar />
      <Fade in={true} timeout={4000}>
        <Box>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h3">Education</Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: 2, fontFamily: "Roboto_Condensed" }}
            >
              "In the 'Education' section, you can find information about my
              academic background, including my qualifications, degrees, and
              educational achievements."
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Typography variant="h5">
                Università degli Studi eCampus
                <Divider />
              </Typography>
              <TypographyDateEducation sx={{ marginLeft: "auto" }}>
                JAN 2022 - PRESENT
              </TypographyDateEducation>
            </Box>
            <Typography variant="h6" sx={{ fontFamily: "Roboto_Condensed" }}>
              Computer and Software Engineering path (DATABASE)
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Roboto_Condensed", marginTop: 4 }}
            >
              Currently enrolled in the third year of Computer Engineering
            </Typography>
          </Box>
          <List dense>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ bgcolor: "#ffff99" }}
            >
              Exam Done
            </Typography>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Physics I/II" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Algorithms and data structures" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Databases" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Electronic calculators and operating systems" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Electronics of digital systems" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Fundamentals of automatics" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Data management systems" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Decision support systems" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Industrial Automation" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Mechanical and thermal measurements" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Telecommunications networks" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Fade>
      <Fade in={true} timeout={4000}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Typography variant="h5">
              Università degli studi dell'Aquila
              <Divider />
            </Typography>
            <TypographyDateEducation sx={{ marginLeft: "auto" }}>
              SEP 2020 - JAN 2021
            </TypographyDateEducation>
          </Box>
          <Typography variant="h6" sx={{ fontFamily: "Roboto_Condensed" }}>
            Computer and Software Engineering
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Roboto_Condensed", marginTop: 4 }}
          >
            Currently enrolled in the third year of Computer Engineering
          </Typography>
          <List dense>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ bgcolor: "#ffff99" }}
            >
              Exam Done
            </Typography>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Mathematical Analysis I" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Foundations of Informatics" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Geometry" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Mathematical analysis II" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleSharpIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Probability calculation" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Fade>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Typography variant="h5">
            Galileo Galilei Scientific High School
            <Divider />
          </Typography>
          <TypographyDateEducation sx={{ marginLeft: "auto" }}>
            SEP 2015 - JUL 2020
          </TypographyDateEducation>
        </Box>
        <Typography variant="h6" sx={{ fontFamily: "Roboto_Condensed" }}>
          Math and physics
        </Typography>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h3">Skills</Typography>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, fontFamily: "Roboto_Condensed" }}
        >
          "This list provides an overview of the skills I can apply to tackle
          projects and technological challenges."
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <img
          src="/images/skills.png"
          alt="Skills"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={{ marginTop: 10 }}></Box>
    </div>
  );
}
