import React from "react";
import HeaderAction from "./header-action/HeaderAction";
function Header() {
	return (
		<nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">
			<button
				id="sidebarToggleTop"
				className="btn btn-link d-md-none rounded-circle mr-3"
			>
				<i className="fa fa-bars"></i>
			</button>
			<HeaderAction />
		</nav>
	);
}

export default Header;
