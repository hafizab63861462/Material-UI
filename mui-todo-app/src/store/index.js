import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};

const toDoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    Add(state, action) {
      const newToDo = {
        id: state?.toDos[state?.toDos?.length - 1]?.id + 1 || 0,
        title: action.payload.title,
        status: false,
        isShowUpdateField: false,
      };
      state.toDos.push(newToDo);
    },
    Edit(state, action) {
      state.toDos = state.toDos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, isShowUpdateField: true }
          : todo;
      });
    },
    Delete(state, action) {
      state.toDos = state.toDos.filter((task) => task.id !== action.payload.id);
    },
    Update(state, action) {
      state.toDos = [...state.toDos].map((task) => {
        return task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.title,
              isShowUpdateField: false,
            }
          : task;
      });
    },
    Complete(state, action) {
      state.toDos = state.toDos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, status: !todo.status }
          : todo;
      });
    },
    RemoveAll(state) {
      state.toDos = [];
    },
  },
});

const store = configureStore({
  reducer: toDoSlice.reducer,
});

export const toDoActions = toDoSlice.actions;
export default store;
