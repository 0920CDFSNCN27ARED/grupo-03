import React from "react";
import SideMenuHeader from "./side-menu-header/SideMenuHeader";
import SideMenuLink from "./side-menu-link/SideMenuLink";

function SideMenu() {
	const sideMenuLinkValue = [
		{
			title: "Home",
			icon: "fa-folder",
		},
		{
			title: "Graficos de estadisticas",
			icon: " fa-chart-area",
		},

		{
			title: "Tabla de productos",
			icon: " fa-table",
		},
	];

	return (
		<ul
			className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
			id="accordionSidebar"
		>
			<SideMenuHeader />

			<hr className="sidebar-divider my-0" />

			<SideMenuLink />

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Menu</div>
			{sideMenuLinkValue.map((elem, index) => {
				return <SideMenuLink key={index} title={elem.title} icon={elem.icon} />;
			})}

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	);
}

export default SideMenu;
