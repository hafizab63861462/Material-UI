import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToDoAppContainer } from "./container/ToDoAppContainer";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#499cc1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box component="div" className={classes.root}>
        <ToDoAppContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
