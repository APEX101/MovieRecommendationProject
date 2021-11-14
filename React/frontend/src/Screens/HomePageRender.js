import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/HomePageRender.css";
import "../Css/PreLoading.css";
import { FetchTopMovieIds } from "../Redux/Actions";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";

const HomePageRender = () => {
  //1st dispath state
  const moviedata = useSelector((state) => state.fetchReducer);
  const dispatch = useDispatch();
  const posterlink = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(FetchTopMovieIds());
  }, [dispatch]);

  console.log(moviedata?.object);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {moviedata.loading === true ? (
        <div class="load">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      ) : (
        <Slider {...settings} style={{ marginLeft: 10, marginRight: 10 }}>
          {moviedata.object.map((movie) => {
            return (
              <div key={movie.id} className="moviecontainer">
                <div>
                  <img
                    src={`${posterlink + movie.poster_path}`}
                    alt={movie.title}
                    className="photo"
                  />
                </div>
                <div className="moviestitlerender">
                  <h3 style={{ textAlign: "start", paddingLeft: 10 }}>
                    {movie.title}
                  </h3>
                  <p style={{ textAlign: "start", paddingLeft: 10 }}>
                    {movie.release_date}
                  </p>
                  <p style={{ textAlign: "start", paddingLeft: 10 }}>
                    <StarIcon sx={{ color: "yellow", borderColor: "black" }} />
                    {movie.vote_average}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default HomePageRender;
