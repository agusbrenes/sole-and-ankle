import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
	return (
		<Wrapper>
			{SHOES.map((shoe) => (
				<ShoeItem stylekey={shoe.slug} {...shoe} />
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
`;

const ShoeItem = styled(ShoeCard)`
	flex: 1 1 100%;

	@media screen and (min-width: 576px) {
		flex-basis: calc((100%) / 3 + (1px / 10));
	}

	@media screen and (min-width: 992px) {
		flex-basis: calc((100%) / 4 + (1px / 10));
	}
`;

export default ShoeGrid;
