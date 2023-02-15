import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import TypographyText from "./common/TypographyText";
import ButtonField from "./common/ButtonField";
import InputField from "./common/InputField";

const useStyles = makeStyles({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

const AddTask = ({ addAction }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const classes = useStyles();

  const addTask = () => {
    if (taskTitle) {
      let obj = {
        title: taskTitle,
        status: false,
        isShowUpdateField: false,
      };
      addAction(obj);
      setTaskTitle("");
    }
  };
  return (
    <Box component="div">
      <TypographyText
        className={classes.heading}
        variant="h3"
        align="center"
        text="TODOLIST"
        gutterBottom
      />

      <Stack spacing={2} direction="row">
        <InputField
          label="Enter text here"
          variant="outlined"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <ButtonField variant="contained" onClick={addTask} text="ADD" />
      </Stack>
    </Box>
  );
};

export default AddTask;
