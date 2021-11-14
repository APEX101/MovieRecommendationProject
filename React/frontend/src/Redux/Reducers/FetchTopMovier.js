const initialstate = {
  loading: false,
  object: [],
  error: null,
};

const fetchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUESTS":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        object: action.payload,
      };
    case "FETCH_POSTS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default fetchReducer;
