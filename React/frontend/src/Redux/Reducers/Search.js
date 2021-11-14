const initialstate = {
  loading: false,
  object: [],
  error: null,

  searchobject: [],

  commentsloading: false,
  commentsobject: [],
};

const SearchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_REQUESTS":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        object: action.payload,
      };
    case "FETCH_SEARCH_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "Fetch_RECOMMENDED_SUCCESS":
      return {
        ...state,
        searchobject: action.payload,
      };
    case "FETCH_COMMENTS_REQUESTS":
      return {
        ...state,
        commentsloading: true,
      };
    case "Fetch_COMMENTS_SUCCESS":
      return {
        ...state,
        commentsloading: false,
        commentsobject: action.payload,
      };

    default:
      return state;
  }
};

export default SearchReducer;
