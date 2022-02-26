import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ theme, text, callback }) => {

	return <Wrapper theme={ theme } type="button" onClick={callback}>{ text }</Wrapper>;
};

Button.propTypes = {
	theme: PropTypes.string,
	text: PropTypes.string,
	callback: PropTypes.func
};

export default Button;