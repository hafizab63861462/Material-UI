import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toDoActions } from "../store";

const useStyles = makeStyles({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: 500,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "auto",
  },
  field: {
    "& .MuiOutlinedInput-field": {
      "& fieldset": {
        borderColor: "yellow",
      },
    },
  },
  button: {
    position: "fixed",
    bottom: 5,
    left: 295,
    width: 200,
  },
  strikeThrough: {
    textDecoration: "line-through",
  },
});

const TaskList = () => {
  const items = useSelector((state) => state?.toDos);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const classes = useStyles();

  const addTask = () => {
    console.log("Button clicked!", newTask);
    if (newTask) {
      dispatch(
        toDoActions.Add({
          title: newTask,
          status: false,
          isShowUpdateField: false,
        })
      );
      setNewTask("");
    }
  };

  const editTask = (id) => {
    setUpdateValue(items[id].title);
    dispatch(toDoActions.Edit({ id }));
  };
  const completeTask = (id) => {
    dispatch(toDoActions.Complete({ id }));
  };
  const deleteTask = (id) => {
    dispatch(toDoActions.Delete({ id }));
  };

  const updateTask = (id, status) => {
    let obj = {
      id,
      title: updateValue,
      status,
    };
    dispatch(toDoActions.Update({ obj }));
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* TO DO HEADING */}

        <Typography
          className={classes.heading}
          variant="h1"
          align="center"
          fontSize="14"
          gutterBottom
        >
          TODOLIST
        </Typography>

        {/* Text Field and Button */}

        <Stack spacing={2} direction="row">
          <TextField
            className={classes.root}
            id="yellow-outlined-textfield"
            label="Enter text here"
            variant="outlined"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={addTask}>
            ADD
          </Button>
        </Stack>

        {/* List */}

        <List>
          {items &&
            items.map((item, index) =>
              items[item.id].isShowUpdateField ? (
                <ListItem key={item.id}>
                  <Stack spacing={2} direction="row">
                    <TextField
                      className={classes.root}
                      id="yellow-outlined-textfield"
                      label="Enter text here"
                      variant="outlined"
                      value={updateValue}
                      onChange={(e) => setUpdateValue(e.target.value)}
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      onClick={() => updateTask(item.id, item.status)}
                    >
                      Update
                    </Button>
                  </Stack>
                  <br />
                </ListItem>
              ) : (
                <ListItem key={index}>
                  <Checkbox
                    onClick={() => completeTask(item.id)}
                    checked={item.status}
                  />
                  <ListItemText
                    primary={item.title}
                    className={item.status ? classes.strikeThrough : ""}
                  />

                  <Button variant="contained" onClick={() => editTask(item.id)}>
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </Button>
                  <hr />
                </ListItem>
              )
            )}
        </List>
      </CardContent>
      {/* Remove all Button */}

      <CardActions>
        <Button variant="contained" className={classes.button}>
          Remove All
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskList;
