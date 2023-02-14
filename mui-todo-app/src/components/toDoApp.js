import { TaskListContainer } from "../container/taskListContainer";
import { AddTaskContainer } from "../container/addTaskContainer";
import { Card, CardContent, CardActions } from "@material-ui/core";
import CommonButton from "./common/commonButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
    justifyContent: "space-between",
    padding: "16px",
  },
  taskDone: {
    border: "1px solid #808080 !important",
    padding: "6px 16px",
    width: 200,
    textAlign: "center",
  },
}));
const ToDoApp = ({ removeAllAction, totalTask, doneTask }) => {
  const classes = useStyles();
  const percentage = totalTask ? (doneTask / totalTask) * 100 : 0;
  console.log(percentage);
  const divStyle = {
    backgroundImage: `linear-gradient(to right, yellow ${percentage}%, white 0%)`,
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <AddTaskContainer />
        <TaskListContainer />
      </CardContent>

      <CardActions className={classes.listRow}>
        <div className={classes.taskDone} style={divStyle}>
          {doneTask} of {totalTask} task Done
        </div>
        <CommonButton
          variant="contained"
          className={classes.removeButton}
          text="Remove All"
          onClick={() => removeAllAction()}
        />
      </CardActions>
    </Card>
  );
};

export default ToDoApp;
