import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "../Css/Searchbar.css";
import AppBar from "@mui/material/AppBar";
import { useDispatch } from "react-redux";
import { FetchSearch } from "../Redux/Actions";
import { useHistory } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  marginBottom: 10,

  bottom: 0,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("rgba(255,3,55,1)", 0.5),
  "&:hover": {
    backgroundColor: alpha("rgba(255,3,55,1)", 0.25),
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(30),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = () => {
  const [searchtext, setSearchText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchtext);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      dispatch(FetchSearch(searchtext));
      history.push("/movie");
    }
  };

  console.log(searchtext);
  return (
    <div className="box">
      <AppBar position="relative" className="appbar">
        <h3 style={{ textAlign: "center", fontSize: 40 }}>Welcome!</h3>
        <p style={{ textAlign: "center", fontSize: 20 }}>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search Movie"
            inputProps={{ "aria-label": "search" }}
            name="search"
            value={searchtext}
            onChange={handleChange}
            onKeyDown={handleSubmit}
          />
        </Search>
      </AppBar>
    </div>
  );
};

export default SearchBar;
