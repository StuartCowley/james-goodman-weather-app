import React from "react";
import PropTypes from "prop-types";

function HelloWorld({ name }) {
  return <p>Hello {name}</p>;
}
HelloWorld.propTypes = {
  name: PropTypes.string,
};

HelloWorld.defaultProps = {
  name: "World",
};
export default HelloWorld;
