import axios from "axios";

// action creators
export const fetchSourceRequest = query => {
  console.log("fetch post request action called");
  return {
    type: FETCH_SOURCE_REQUEST,
    query: query || ""
  };
};

export const fetchSourceSuccess = data => {
  console.log("fetch post success action called");
  return {
    type: FETCH_SOURCE_SUCCESS,
    data: data
  };
};

export const fetchSourceFailure = error => {
  console.log("fetch post failure action called");
  return {
    type: FETCH_SOURCE_FAILURE,
    error: error
  };
};

// action to fetch the data 
export const fetchSourceData = () => dispatch => {

  return dispatch => {
    console.log("dispatching post request action...");
    dispatch(fetchSourceRequest());
    return axios
      .get(`hhttp://localhost:3000/`)
      .then(res => {
        console.log("response success", res.data.items);
        // do some logic on response if required
        dispatch(fetchSourceSuccess(res.data.items));
      })
      .catch(err => dispatch(fetchSourceFailure(err)));
  };
};