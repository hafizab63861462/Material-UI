import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { toDoActions } from "../store";

function mapStateToProps(state = { toDos: [] }) {
  return {
    items: state.toDos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editAction: (payload) => dispatch(toDoActions.Edit(payload)),
    updateAction: (payload) => dispatch(toDoActions.Update(payload)),
    deleteAction: (payload) => dispatch(toDoActions.Delete(payload)),
    completeAction: (payload) => dispatch(toDoActions.Complete(payload)),
  };
};

export const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
