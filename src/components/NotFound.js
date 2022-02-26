import React from 'react';

// Styles
const h1Style = {
	color: 'black',
	marginLeft: '50px',
	marginTop: '50px'
}

const pStyle = {
	color: '#00000099',
	marginLeft: '50px'
}
const NotFound = () => (
	<>
		<h1 style={ h1Style }>404 - Page Not Found</h1>
		<p style={ pStyle }>The page you are looking for does not exist.<br />Please make sure that the URL you have entered is correct.</p>
	</>
);

export default NotFound;