import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Css/MovieRender.css";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import MoodBadIcon from "@mui/icons-material/MoodBad";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

const MovieRender = () => {
  const moviedata = useSelector((state) => state.SearchReducer);
  const movieobjects = useSelector(
    (state) => state.SearchReducer?.object?.results
  );
  const [renderstate, setRenderState] = useState("");
  const backdroplink = "https://image.tmdb.org/t/p/w500/";

  console.log(moviedata.commentsobject);
  console.log(movieobjects[0]);
  console.log(renderstate);

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
        <div class="content">
          <div
            className="backdrop"
            style={{
              backgroundImage: `url('${
                backdroplink + movieobjects[0].backdrop_path
              }')`,
            }}
          ></div>

          <div class="opacity">
            <div class="image">
              <img
                src={`${backdroplink + movieobjects[0].backdrop_path}`}
                className="image"
              />
            </div>
            {/* All image panel text here */}
            <div class="info">
              <h1>{movieobjects[0].original_title}</h1>
              <p> {movieobjects[0].release_date} </p>
              <h1>Overview</h1>
              <body>{movieobjects[0].overview} </body>
            </div>
          </div>

          <div>
            <div className="appheading">
              <h1 style={{ color: "black", paddingLeft: 10 }}>
                Similar Recommendations
              </h1>
            </div>

            <div className="recommend">
              {moviedata?.searchobject?.map((movie) => {
                return (
                  <div key={movie.id} className="moviecontainer">
                    <div>
                      <img
                        src={`${backdroplink + movie.poster_path}`}
                        alt={movie.title}
                        className="photo"
                      />
                    </div>
                    <div className="moviestitless" style={{ color: "white" }}>
                      <h3 style={{ paddingLeft: 10, fontStyle: "bold" }}>
                        {movie.title}
                      </h3>
                      <p style={{ paddingLeft: 10 }}>{movie.release_date}</p>
                      <p style={{ paddingLeft: 10 }}>
                        <StarIcon
                          sx={{ color: "yellow", borderColor: "black" }}
                        />
                        {movie.vote_average}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="appheading">
              <h1>Reviews</h1>
            </div>

            <div className="sentiments">
              <div>
                <span role="img" aria-label="arrow">
                  😀
                </span>
                <h2
                  className="text"
                  onClick={() => setRenderState("good")}
                  style={{ color: "white" }}
                >
                  BlockBusters ({moviedata?.commentsobject?.good?.length})
                </h2>
              </div>
              <div>
                {" "}
                <span role="img" aria-label="arrow">
                  🙃
                </span>
                <h2
                  className="text"
                  onClick={() => setRenderState("neutral")}
                  style={{ color: "white" }}
                >
                  {" "}
                  Just Okay ({moviedata?.commentsobject?.neutral?.length}){" "}
                </h2>
              </div>
              <div>
                <span role="img" aria-label="arrow">
                  😥
                </span>
                <h2
                  className="text"
                  onClick={() => setRenderState("bad")}
                  style={{ color: "white" }}
                >
                  Worst ({moviedata?.commentsobject?.bad?.length})
                </h2>
              </div>
            </div>

            <div>
              {renderstate === "neutral" ? (
                <div className="commentrender">
                  {moviedata?.commentsobject?.neutral?.map((comments) => {
                    return (
                      <div className="commentrenderinside">
                        <p style={{ color: "white" }}>{comments}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              {renderstate === "good" ? (
                <div className="commentrender">
                  {moviedata?.commentsobject?.good?.map((comments) => {
                    return (
                      <div className="commentrenderinside">
                        <p style={{ color: "white" }}>{comments}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              {renderstate === "bad" ? (
                <div className="commentrender">
                  {moviedata?.commentsobject?.bad?.map((comments) => {
                    return (
                      <div className="commentrenderinside">
                        <p style={{ color: "white" }}>{comments}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieRender;
