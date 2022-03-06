import {
  AppBar,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../context/CryptoContext";

export default function Header() {
  const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer"
    }
  }));

  const classes = useStyles();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  });

  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => navigate("/")}
              className={classes.title}
            >
              Crypto App
            </Typography>
            <Select
              value={currency}
              variant="outlined"
              style={{
                height: 40,
                width: 100,
                marginLeft: 15
              }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
