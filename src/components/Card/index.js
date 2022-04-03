import React from "react";

// Styles
import { Wrapper } from "./Card.styles";

const Card = ({ product }) => (
	<div>
		<Wrapper>
			<h4>Company: <p>{ product.company }</p></h4>
			<h4>Series: <p>{ product.series }</p></h4>
			<h4>Model: <p>{ product.model }</p></h4>
		</Wrapper>
		<h3 style={{ 'padding': '0 10px', 'margin': '10px' }}>{ product.series } { product.model }</h3>
	</div>
);

export default Card;