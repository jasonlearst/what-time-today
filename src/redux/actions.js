import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  ADD_AVAILABILITY,
  REMOVE_AVAILABILITY,
  CLEAR_AVAILABILITIES,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const addAvailability = (availability) => ({
  type: ADD_AVAILABILITY,
  payload: {
    availability: availability,
  },
});

export const removeAvailability = (availability) => ({
  type: REMOVE_AVAILABILITY,
  payload: {
    availability: availability,
  },
});

export const clearAvailabilities = () => ({
  type: CLEAR_AVAILABILITIES,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
