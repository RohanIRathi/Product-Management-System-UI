import React from "react";

// Styles
import { Wrapper, Content } from "./Products.styles";

// Components
import Grid from "../Grid";
import Card from "../Card";

const Products = ({ products }) => {

	return (
		<Wrapper>
			<Content>
				<Grid>
				{ products.map((product) => (
					<Card product={ product } key={ product.id } />
				)) }
				</Grid>
			</Content>
		</Wrapper>
	);
};

export default Products;