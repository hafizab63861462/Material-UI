import "./App.css";
import { makeStyles } from "@mui/styles";
import { ToDoAppContainer } from "./container/toDoAppContainer";

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
    <div className={classes.root}>
      <ToDoAppContainer />
    </div>
  );
}

export default App;
