import React from "react";
import styled from "styled-components";
import {
	Route,
	NavLink,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";

const StyledNav = styled.div`
	position: absolute;
	width: 100vw;
	height: 65px;
	left: 0px;
	top: 0px;
	background: #ffbf69;
`;
const StyledNavLink = styled(NavLink)`
	display: inline;
	margin-right: 45px;
	color: white;
	font-family: Roboto;
	font-style: normal;
	// font-weight: bold;
	text-decoration: none;
`;

const StyledNavLinkList = styled.div`
	position: absolute;
	top: 25px;
	right: 20px;
	

`
function NavBar() {
	return (
		<StyledNav>
			<StyledNavLinkList>
				<StyledNavLink exact activeClassName="active" to="/">
					Home
				</StyledNavLink>
				<StyledNavLink exact activeClassName="active" to="/">
					Groups
				</StyledNavLink>
				<StyledNavLink exact activeClassName="active" to="/">
					Get Connected
				</StyledNavLink>
			</StyledNavLinkList>
		</StyledNav>
	);
}
export default NavBar;
