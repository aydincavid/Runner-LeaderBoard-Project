import { combineReducers } from "redux";
import changeSortOptionReducer from "./changeSortOptionReducer";
import userListReducer from "./userListReducer";
import ListOptionsReducer from "./ListOptionsReducer";
import PaceListReducer from "./PaceListReducer";
import mergedListReducer from "./mergedListReducer";
const rootReducer = combineReducers({
  changeSortOptionReducer,
  userListReducer,
  ListOptionsReducer,
  PaceListReducer,
  mergedListReducer,
});

export default rootReducer;
