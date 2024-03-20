import { createTheme } from "@mui/material/styles";
import "./components/font.css";

export const Colors = {
  primary: "#007bff", // Cambia questo colore con il tuo colore principale
  secondary: "#6c757d", // Cambia questo colore con il tuo colore secondario
  background: "#f8f9fa", // Cambia questo colore con il tuo colore di sfondo
  text: "#403434", // Cambia questo colore con il tuo colore del testo
  accent: "#ffc107", // Cambia questo colore con il tuo colore di accento
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.background,
    },
    text: {
      primary: Colors.text,
    },
  },
  typography: {
    fontFamily: ["ProtestRiot-Regular", "Oswald", "Roboto_Condensed"].join(","),
  },
});
