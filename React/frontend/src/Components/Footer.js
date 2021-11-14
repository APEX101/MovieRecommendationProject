import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {"Copyright © "}
      <Link style={{ color: "blue" }}>TOPMOVIESITE</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: " linear-gradient(to right, #232526, black)",
        paddingTop: 6,
        paddingBottom: 8,
      }}
    >
      <Container maxWidth="lg" style={{ color: "white" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Reach Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          style={{ color: "white" }}
        >
          contact our team for any query at our copyright
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
