import React, { Fragment } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonField from "./common/ButtonField";
import InputForm from "./common/InputForm";
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
  const classes = useStyles();

  return (
    <List>
      <hr />
      {items &&
        items.map((item, index) =>
          items[index]?.isShowUpdateField ? (
            <Fragment key={index}>
              <ListItem className={classes.listItem}>
                <InputForm
                  id={item?.id}
                  defaultValue={item?.title}
                  label="Update text here"
                  variant="outlined"
                  registerName={"update_title"}
                  action={updateAction}
                  buttonVariant="contained"
                  buttonType="submit"
                  buttonText="Update"
                />
                <br />
              </ListItem>
              <hr />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <ListItem className={classes.listItem}>
                <CheckBox
                  onClick={() => completeAction({ id: item.id })}
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
                  onClick={() => editAction({ id: item.id })}
                  text="Edit"
                />

                <ButtonField
                  variant="contained"
                  onClick={() => deleteAction({ id: item.id })}
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
