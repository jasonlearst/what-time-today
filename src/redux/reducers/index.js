import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import availabilities from "./availabilities";

export default combineReducers({
  availabilities,
  todos,
  visibilityFilter,
});
