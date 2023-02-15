import * as React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import CommonButton from "./common/commonButton";
import CommonTextField from "./common/commonTextField";
import CommonCheckBox from "./common/commonCheckBox";
const useStyles = makeStyles({
  strikeThrough: {
    textDecoration: "line-through",
  },
  editBtn: {
    "&.MuiButton-root": {
      marginRight: "4px",
    },
  },

  listItem: {
    paddingLeft: "0px",
    paddingRight: "0px",
    background: "#B8E2F2",
    "&:hover": {
      backgroundColor: "#89CFF0",
    },
  },
});

const TaskList = ({
  items,
  editAction,
  updateAction,
  deleteAction,
  completeAction,
}) => {
  const [updateValue, setUpdateValue] = useState("");
  const classes = useStyles();

  const editTask = (id) => {
    const item = items.find((item) => item.id === id);
    setUpdateValue(item.title);
    editAction({ id });
  };

  const updateTask = (id) => {
    let obj = {
      id,
      title: updateValue,
    };
    updateAction({ obj });
  };

  return (
    <List>
      <hr />
      {items &&
        items.map((item, index) =>
          items[index]?.isShowUpdateField ? (
            <React.Fragment key={index}>
              <ListItem className={classes.listItem}>
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
              <hr />
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <ListItem className={classes.listItem}>
                <CommonCheckBox
                  onClick={(id) => completeAction({ id })}
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
                  onClick={(id) => deleteAction({ id })}
                  id={item.id}
                  text="Delete"
                />
              </ListItem>
              <hr />
            </React.Fragment>
          )
        )}
    </List>
  );
};

export default TaskList;
