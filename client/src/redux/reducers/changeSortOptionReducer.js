import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeSortOptionReducer(state = initialState.currentOption, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SORT_OPTION:{
      
        return action.payload;
    }
     

    default:
      return state;
  }
}
