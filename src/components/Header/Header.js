import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
	// Our site features two visual headers, but they should be
	// grouped semantically as a single header.
	return (
		<header>
			<SuperHeader />
			<MainHeader>
				{/* <Logo /> */}
				<Brand />
				<Nav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</Nav>
			</MainHeader>
		</header>
	);
};

const MainHeader = styled.div`
	// !MAYBE
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px 32px;
	border-bottom: 1px solid ${COLORS.gray[300]};
`;

// !MAYBE
const Brand = styled(Logo)`
	position: absolute;
	left: 32px;
	top: 25%;
`;

const Nav = styled.nav`
	display: flex;
	gap: 3rem;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: ${COLORS.gray[900]};
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`;

export default Header;
