import axios from "axios";
import axiosInstance from "../../Components/axios";
import axiosSearchInstance from "../../Components/axiosSearch";

//**Fetches top recommendations for movies through our ml system */
export const FetchTopMovieIds = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUESTS" });
  let movieids = [];

  try {
    await axios.get("http://127.0.0.1:8000/top/").then((response) => {
      movieids = response.data;
    });
  } catch (err) {
    dispatch({
      type: "FETCH_POSTS_FAILED",
      payload: err,
    });
  }
  console.log(movieids);
  let moviedata = [];

  Promise.all(
    movieids?.recommended?.map(async (list) => {
      await axiosInstance.get(`${list}`).then((response) => {
        moviedata.push(response.data);
      });
    })
  )
    .then(() => {
      //in then perform any action after promise complete asyncrnously
      dispatch({
        type: "FETCH_POSTS_SUCCESS",
        payload: moviedata,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: "FETCH_POSTS_FAILED",
        payload: err,
      });
    });

  console.log(moviedata);
};

export const FetchSearch = (moviename) => async (dispatch, getState) => {
  const URL = "http://127.0.0.1:8000/searchbased/";
  let data = { name: moviename };
  console.log(data);
  //Main searched movie data
  dispatch({ type: "FETCH_SEARCH_REQUESTS" });
  try {
    await axiosSearchInstance(moviename)
      .call()
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "FETCH_SEARCH_SUCCESS", payload: response.data });
      });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: "FETCH_SEARCH_SUCCESS",
      payload: err.message,
    });
  }

  //Content based filter recommnedation for searched movie Getting only ids
  let recommendedlist = [];
  try {
    await axios.post(URL, data).then((response) => {
      console.log(response.data);
      recommendedlist = response.data;
    });
  } catch (error) {
    console.log(error);
  }

  //Now get movie object based off of recommended ids
  let movieobjects = [];
  console.log(recommendedlist);
  Promise.all(
    recommendedlist?.recommended?.map(async (list) => {
      await axiosInstance.get(`${list}`).then((response) => {
        movieobjects.push(response.data);
        console.log(response.data);
      });
    })
  )
    .finally(() => {
      console.log(movieobjects);
      dispatch({ type: "Fetch_RECOMMENDED_SUCCESS", payload: movieobjects });
    })
    .catch((error) => {
      console.log(error);
    });

  // Getting Webscraped Comments Categorized by sentiments
  let postdata = { moviename: moviename };
  dispatch({ type: "FETCH_COMMENTS_REQUESTS" });
  try {
    await axios
      .post("http://127.0.0.1:8000/comments/", postdata)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "Fetch_COMMENTS_SUCCESS", payload: response.data });
        //  recommendedlist = response.data;
      });
  } catch (error) {
    console.log(error);
  }
};
