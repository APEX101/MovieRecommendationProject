import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/search/movie";
const axiosSearchInstance = (moviename) =>
  axios.create({
    baseURL: baseURL,
    timeout: 5000,
    params: {
      api_key: "25eecaf07dbd9b9db06fa7f5d0737872",
      language: "en-US",
      query: `${moviename}`,
      page: 1,
      include_adult: false,
    },
  });

export default axiosSearchInstance;
