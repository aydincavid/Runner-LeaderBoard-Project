import initialState from "../reducers/initialState";
import * as actionTypes from "./actionTypes";

export function ListOptions() {
  return { type: actionTypes.LIST_OPTIONS, payload: initialState.optionList };
}

export function ChangeOption(option){
 return {
   type: actionTypes.CHANGE_SORT_OPTION,
   payload: option,
 };
}