import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";
export default function ListOptionsReducer(
  state = initialState.optionList,
  action
) {
  switch (action.type) {
    case actionTypes.LIST_OPTIONS:
      return action.payload;

    default:
      return state;
  }
}
