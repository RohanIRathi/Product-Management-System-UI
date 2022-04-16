import React from "react";

// Styles
import { Wrapper, Content } from "./Products.styles";

// Components
import Grid from "../Grid";

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
}