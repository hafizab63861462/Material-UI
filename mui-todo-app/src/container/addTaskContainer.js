import { connect } from "react-redux";
import { toDoActions } from "../store";
import AddTask from "../components/addTask";

const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (payload) => dispatch(toDoActions.Add(payload)),
  };
};

export const AddTaskContainer = connect(null, mapDispatchToProps)(AddTask);
