import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Card, CardContent, CardActions } from "@mui/material";
import { TaskListContainer } from "../container/TaskListContainer";
import { AddTaskContainer } from "../container/AddTaskContainer";
import ButtonField from "./common/ButtonField";

const useStyles = makeStyles(() => ({
  card: {
    maxHeight: "90%",
    maxWidth: "90%",
    "&.MuiCard-root": {
      overflow: "auto",
    },
    display: "flex",
    flexDirection: "column",
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
    border: "1px solid #808080",
    padding: "6px 16px",
    width: 200,
    textAlign: "center",
  },
}));
const ToDoApp = ({ removeAllAction, totalTask, doneTask }) => {
  const classes = useStyles();
  const percentage = totalTask ? (doneTask / totalTask) * 100 : 0;
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
        <Box component="div" className={classes.taskDone} sx={divStyle}>
          {doneTask} of {totalTask} task Done
        </Box>

        <ButtonField
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
