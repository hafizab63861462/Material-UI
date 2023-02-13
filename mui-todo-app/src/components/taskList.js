import * as React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toDoActions } from "../store";
import CommonButton from "./common/commonButton";
import CommonTextField from "./common/commonTextField";
import CommonCheckBox from "./common/commonCheckBox";
const useStyles = makeStyles({
  strikeThrough: {
    textDecoration: "line-through",
  },
  editBtn: {
    marginRight: "4px !important",
  },

  listItem: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
});

const TaskList = () => {
  const items = useSelector((state) => state?.toDos);
  const dispatch = useDispatch();
  const [updateValue, setUpdateValue] = useState("");
  const classes = useStyles();

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

  const updateTask = (id) => {
    let obj = {
      id,
      title: updateValue,
    };
    dispatch(toDoActions.Update({ obj }));
  };

  return (
    <List>
      {items &&
        items.map((item, index) =>
          items[item.id].isShowUpdateField ? (
            <ListItem key={item.id}>
              <Stack spacing={2} direction="row">
                <CommonTextField
                  label="Enter text here"
                  variant="outlined"
                  value={updateValue}
                  onChange={(e) => setUpdateValue(e.target.value)}
                />

                <CommonButton
                  variant="contained"
                  text="Update"
                  onClick={updateTask}
                  id={item.id}
                />
              </Stack>
              <br />
            </ListItem>
          ) : (
            <ListItem key={index} className={classes.listItem}>
              <CommonCheckBox
                onClick={completeTask}
                id={item.id}
                checked={item.status}
              />
              <ListItemText
                primary={item.title}
                className={item.status ? classes.strikeThrough : ""}
              />

              <CommonButton
                variant="contained"
                className={classes.editBtn}
                onClick={editTask}
                id={item.id}
                text="Edit"
              />

              <CommonButton
                variant="contained"
                onClick={deleteTask}
                id={item.id}
                text="Delete"
              />
              <hr />
            </ListItem>
          )
        )}
    </List>
  );
};

export default TaskList;
