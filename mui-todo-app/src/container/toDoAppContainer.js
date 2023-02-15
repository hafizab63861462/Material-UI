import { connect } from "react-redux";
import { toDoActions } from "../store";
import ToDoApp from "../components/ToDoApp";

function mapStateToProps(state = { toDos: [] }) {
  return {
    totalTask: state.toDos.length,
    doneTask: state.toDos.filter((item) => item.status === true).length,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllAction: () => dispatch(toDoActions.RemoveAll()),
  };
};

export const ToDoAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
