import TypographyText from "./common/typographyText";
import CommonButton from "./common/commonButton";
import CommonTextField from "./common/commonTextField";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

const AddTask = ({ addAction }) => {
  const [newTask, setNewTask] = useState("");
  const classes = useStyles();

  const addTask = () => {
    if (newTask) {
      let obj = {
        title: newTask,
        status: false,
        isShowUpdateField: false,
      };
      addAction(obj);
      setNewTask("");
    }
  };
  return (
    <div>
      {/* TO DO HEADING */}

      <TypographyText
        className={classes.heading}
        variant="h3"
        align="center"
        text="TODOLIST"
        gutterBottom
      ></TypographyText>

      {/* Text Field and Button */}

      <Stack spacing={2} direction="row">
        <CommonTextField
          label="Enter text here"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <CommonButton variant="contained" onClick={addTask} text="ADD" />
      </Stack>
    </div>
  );
};

export default AddTask;
