import * as actionTypes from "./actionTypes";

export function changeOption(option) {
  return { type: actionTypes.CHANGE_SORT_OPTION, payload: option };
}

export function getUsersSuccess(userList) {
  return { type: actionTypes.GET_USERS_SUCCESS, payload: userList };
}

export function getUsers() {
  return function (dispatch) {
    let url = "http://localhost:3001/testAPI";
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getUsersSuccess(res));
      });
  };
}

export function getPacesSuccess(paceData) {
  return { type: actionTypes.GET_PACES_SUCCESS, payload: paceData };
}

export function getPaces() {
  return function (dispatch) {
    let url = "http://localhost:3001/pace";
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getPacesSuccess(res));
      });
  };
}

export function mergedData(data) {
  return { type: actionTypes.MERGE_LIST, payload: data };
} // Reducer yaz bu payloadı all arrayine at

export function mergeList(userArr, paceArr, option) {
  if (typeof option == "undefined") {
    option = "Average Pace";
  }

  return function (dispatch) {
    var arr1 = userArr.map((x, i) => {
      x.userid = i + 1;
      return x;
    });
    var arr2 = paceArr.map((x) => {
      return x;
    });

    function mergeArrayObjects(arr1, arr2) {
      if (arr1 && typeof arr2[0] != "undefined") {
        return arr1.map((item, i) => {
          if (item.userid == arr2[i].userid) {
            //merge two objects

            return Object.assign({}, item, arr2[i]);
          }
        });
      }
    }
    if (typeof mergeArrayObjects(arr1, arr2) != "undefined") {
      const arr3 = mergeArrayObjects(arr1, arr2);
      arr3.map((x) => {
        Object.assign(x, { average_pace: x.distance / 1000 / x.total_time });
      });


      if (option == "Average Pace") {
        arr3.forEach((element) => {
          arr3.sort((a, b) => (a.average_pace > b.average_pace ? 1 : -1));
        });
      }
      if (option == "Distance") {
        arr3.forEach((element) => {
          console.log(element.distance);
          arr3.sort((a, b) => (Number(a.distance) > Number(b.distance) ? 1 : -1));
        });
      }
      if (option == "Total Time") {
        arr3.forEach((element) => {
          arr3.sort((a, b) => (a.total_time > b.total_time ? 1 : -1));
        });
      }

      dispatch(mergedData(arr3));
    }
  };
}
