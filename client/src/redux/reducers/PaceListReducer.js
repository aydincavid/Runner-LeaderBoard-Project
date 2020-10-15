import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function PaceListReducer(state = initialState.pace, action) {
  switch (action.type) {
    case actionTypes.GET_PACES_SUCCESS: {
      return action.payload;
    }

    default:
      return state;
  }
}
