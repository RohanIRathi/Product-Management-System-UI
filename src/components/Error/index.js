import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Error.styles";

const Error = ({ text }) => (
	<Wrapper>{ text }</Wrapper>
);

Error.propTypes = {
	text: PropTypes.string
}

export default Error;