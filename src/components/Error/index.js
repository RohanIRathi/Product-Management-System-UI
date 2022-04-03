import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Error.styles";

const Error = ({ text, className }) => (
	<Wrapper className={ className }>{ text }</Wrapper>
);

Error.propTypes = {
	text: PropTypes.string
}

export default Error;