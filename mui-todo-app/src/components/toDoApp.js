import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Card, CardContent, CardActions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TaskListContainer } from "../container/TaskListContainer";
import { AddTaskContainer } from "../container/AddTaskContainer";
import ButtonField from "./common/ButtonField";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "95%",
      maxHeight: "95%",
    },
    // Styles for medium phones
    [theme.breakpoints.between("sm", "md")]: {
      width: "75%",
      maxHeight: "95%",
    },
    // Styles for large phones and small tablets
    [theme.breakpoints.between("md", "lg")]: {
      width: "75%",
      maxHeight: "95%",
    },
    // Styles for large tablets and small desktops
    [theme.breakpoints.between("lg", "xl")]: {
      width: "50%",
      maxHeight: "80%",
    },
    // Styles for medium and large desktops
    [theme.breakpoints.up("xl")]: {
      maxWidth: 700,
    },
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default ToDoApp;
