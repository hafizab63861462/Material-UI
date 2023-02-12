import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import TaskList from "./components/taskList";
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
    <div className={classes.root}>
      <TaskList />
    </div>
  );
}

export default App;
