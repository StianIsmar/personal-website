import { SUBMIT_SEARCH, UPDATE_GENRE, UPDATE_TITLE, EXPORT_COLOR, ADD_TEXT, FETCH_COLOR_BEGIN, FETCH_COLOR_FAILURE, FETCH_COLOR_SUCCESS } from "./SearchFormActionTypes";

export function updateTitle(title) {
  return { type: UPDATE_TITLE, title }
}

export function updateGenre(genre) {
  return { type: UPDATE_GENRE, genre }
}

export function submitSearch() {
  return { type: SUBMIT_SEARCH }
}
export function getColorFromAPI() {
  console.log("THIS IS THE ACTION SENT");
  return { type: 'EXPORT_COLOR' }
}

export function fetchColor() {
  return dispatch => {
    dispatch(fetchColorBegin());
    return fetch("http://www.colr.org/json/color/random")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchColorSuccess(json.new_color));
        return json;
      })
      .catch(error => dispatch(fetchColorFailure(error)));
  };
}

export function fetchColorBegin() {
  return { type: FETCH_COLOR_BEGIN }
}

export function fetchColorSuccess(colorin) {
  let color = '#' + colorin;
  return {
    type: FETCH_COLOR_SUCCESS,
    payload: color
  }
}

export function fetchColorFailure(error) {
  return {
    type: FETCH_COLOR_FAILURE,
    payload: { error }
  }

}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function addText(text) {
  console.log(text, "TEXT FROM ACTIONS")
  return {
    type: ADD_TEXT,
    payload: text
  }
}