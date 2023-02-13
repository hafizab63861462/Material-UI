import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import TaskList from "./components/taskList";
import AddTask from "./components/addTask";
import { Card, CardContent, CardActions } from "@material-ui/core";
import CommonButton from "./components/common/commonButton";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#499cc1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 500,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "auto",
  },
  removeButton: {
    width: 200,
  },
  listRow: {
    justifyContent: "flex-end",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <AddTask />
          <TaskList />
        </CardContent>

        <CardActions className={classes.listRow}>
          <CommonButton
            variant="contained"
            className={classes.removeButton}
            text="Remove All"
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
