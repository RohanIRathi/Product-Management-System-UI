import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './Form.styles';

const Form = ({ callback, children }) => (
	<Wrapper>
		<Content onSubmit={ callback }>{ children }</Content>
	</Wrapper>
);

Form.propTypes = {
	callback: PropTypes.func
}

export default Form;