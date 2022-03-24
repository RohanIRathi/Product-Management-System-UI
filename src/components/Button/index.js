import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ theme, text, callback, type }) => {

	return <Wrapper theme={ theme } type={ type ? type : "button" } onClick={callback}>{ text }</Wrapper>;
};

Button.propTypes = {
	theme: PropTypes.string,
	text: PropTypes.string,
	callback: PropTypes.func,
	type: PropTypes.string,
};

export default Button;