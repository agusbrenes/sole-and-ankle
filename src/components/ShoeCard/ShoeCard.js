import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const TAG_DATA = {
	"on-sale": {
		text: "Sale",
		color: COLORS.primary,
	},
	"new-release": {
		text: "Just Released!",
		color: COLORS.secondary,
	},
};

const ShoeCard = ({
	slug,
	name,
	imageSrc,
	price,
	salePrice,
	releaseDate,
	numOfColors,
	className,
}) => {
	// There are 3 variants possible, based on the props:
	//   - new-release
	//   - on-sale
	//   - default
	//
	// Any shoe released in the last month will be considered
	// `new-release`. Any shoe with a `salePrice` will be
	// on-sale. In theory, it is possible for a shoe to be
	// both on-sale and new-release, but in this case, `on-sale`
	// will triumph and be the variant used.
	// prettier-ignore
	const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

	const tagData = TAG_DATA[variant];

	return (
		<Link href={`/shoe/${slug}`} className={className}>
			<Wrapper>
				<ImageWrapper>
					<Image alt="" src={imageSrc} />
				</ImageWrapper>
				<Spacer size={12} />
				<Row>
					<Name>{name}</Name>
					<Price onSale={variant === "on-sale"}>{formatPrice(price)}</Price>
				</Row>
				<Row>
					<ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
					{variant === "on-sale" && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
				</Row>
				{tagData && <Tag color={tagData.color}>{tagData.text}</Tag>}
			</Wrapper>
		</Link>
	);
};

const Tag = styled.span`
	position: absolute;
	right: -4px;
	top: 12px;
	padding: 8px;
	border-radius: 2px;
	background-color: ${(props) => props.color};
	color: ${COLORS.white};
	font-weight: ${WEIGHTS.bold};
`;

const Link = styled.a`
	text-decoration: none;
	color: inherit;
`;

const Wrapper = styled.article`
	position: relative;
`;

const ImageWrapper = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
`;

const Name = styled.h3`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.gray[900]};
`;

const Price = styled.span`
	color: ${(props) => (props.onSale ? COLORS.gray[700] : COLORS.gray[900])};
	text-decoration: ${(props) => (props.onSale ? "line-through" : "none")};
`;

const ColorInfo = styled.p`
	color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.primary};
`;

export default ShoeCard;
