import "./App.css";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { ToDoAppContainer } from "./container/ToDoAppContainer";

const useStyles = makeStyles(() => ({
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
    <Box component="div" className={classes.root}>
      <ToDoAppContainer />
    </Box>
  );
}

export default App;
