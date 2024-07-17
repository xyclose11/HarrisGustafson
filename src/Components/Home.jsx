import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

// import image from "../images/thinking_man.jpg";

const imageAltText = "Thinking Man";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      {/* <img className="background" src={image} alt="" /> */}
      <div style={{ position: "absolute", top: "4rem", left: "8rem", width: "25rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", animation: "bounce 2s infinite" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
