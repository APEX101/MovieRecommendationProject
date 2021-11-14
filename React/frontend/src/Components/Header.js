import React from "react";
import "../Css/Header.css";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <Toolbar
          className={classes.toolbar}
          style={{
            backgroundImage: `linear-gradient(to right, 
#009fff ,black,#ec2F4B  `,
          }}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Amethysta"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Caesar+Dressing"
            rel="stylesheet"
            type="text/css"
          />
          <div>
            <h1
              style={{
                color: "white",
                position: "relative",

                paddingTop: 60,
                paddingBottom: 40,
              }}
            >
              Find Top <span className="fire">M</span>
              <span className="burn">o</span>
              <span className="burn">v</span>
              <span className="fire">i</span>
              <span className="fire">e</span>
              <span className="fire">s</span> For Free
            </h1>
          </div>
        </Toolbar>
      </React.Fragment>
    </div>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottom: `1px solid 'black`,
    // backgroundColor: "rgba(57,100,255,1)",
  },
}));
