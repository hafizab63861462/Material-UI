import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import TypographyText from "./common/TypographyText";
import InputForm from "./common/InputForm";

const useStyles = makeStyles({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

const AddTask = ({ addAction }) => {
  const classes = useStyles();

  return (
    <Box component="div">
      <TypographyText
        className={classes.heading}
        variant="h3"
        align="center"
        text="TODOLIST"
        gutterBottom
      />
      <InputForm
        label="Enter text here"
        variant="outlined"
        registerName={"task_title"}
        action={addAction}
        buttonVariant="contained"
        buttonType="submit"
        buttonText="ADD"
      />
    </Box>
  );
};

export default AddTask;
