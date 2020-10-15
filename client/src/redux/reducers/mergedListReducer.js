import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function mergedListReducer(state = initialState.all, action) {
  switch (action.type) {
    case actionTypes.MERGE_LIST:
      return action.payload;

    default:
      return state;
  }
}
