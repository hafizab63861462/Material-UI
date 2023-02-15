import React, { Fragment } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import ButtonField from "./common/ButtonField";
import InputField from "./common/InputField";
import CheckBox from "./common/CheckBox";
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

  const handleEditTask = (id) => {
    const item = items.find((item) => item.id === id);
    setUpdateValue(item.title);
    editAction({ id });
  };

  const handleUpdateTask = (id) => {
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
            <Fragment key={index}>
              <ListItem className={classes.listItem}>
                <Stack spacing={2} direction="row">
                  <InputField
                    label="Enter text here"
                    variant="outlined"
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                  />

                  <ButtonField
                    variant="contained"
                    text="Update"
                    onClick={handleUpdateTask}
                    id={item.id}
                  />
                </Stack>
                <br />
              </ListItem>
              <hr />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <ListItem className={classes.listItem}>
                <CheckBox
                  onClick={(id) => completeAction({ id })}
                  id={item.id}
                  checked={item.status}
                />
                <ListItemText
                  primary={item.title}
                  className={item.status ? classes.strikeThrough : ""}
                />

                <ButtonField
                  variant="contained"
                  className={classes.editBtn}
                  onClick={handleEditTask}
                  id={item.id}
                  text="Edit"
                />

                <ButtonField
                  variant="contained"
                  onClick={(id) => deleteAction({ id })}
                  id={item.id}
                  text="Delete"
                />
              </ListItem>
              <hr />
            </Fragment>
          )
        )}
    </List>
  );
};

export default TaskList;
