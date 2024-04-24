export const INITIAL_STATE = {
  loading: false,
  error: false,
  posts: {},
}

export const postReducer = (state, action) => {
  if (action.type === "FETCH_START") {
    return {
      loading: true,
      error: false,
      posts: {},
    }
  } else if(action.type === "FETCH_SUCCESS") {
    return {
      loading: false,
      error: false,
      posts: action.payload,
    }
  } else if(action.type === "FETCH_ERROR") {
    return {
      loading: false,
      error: true,
      posts: {},
    }
  }
}