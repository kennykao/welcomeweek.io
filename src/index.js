import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";
import {
	Route,
	NavLink,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";
import App from "./App";
import GroupsPage from "./common/Groups";
import GetConnectedPage from "./common/GetConnected";
import Notfound from "./notfound";
import NavBar from "./common/NavBar";

const StyledNavLink = styled(NavLink)`
	color: white;
`;

const routing = (
	<Router>
		<div>
			<NavBar></NavBar>
			<hr />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/groups" component={GroupsPage} />
				<Route exact path="/get-connected" component={GetConnectedPage} />
				<Route component={Notfound} />
			</Switch>
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));
