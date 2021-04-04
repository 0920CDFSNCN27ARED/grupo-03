import React from "react";
import logo from "../../../assets/logoCala2.png";

function AdminCard(props) {
	return (
		<div className="logoDiv">
			<img className="logo" src={logo} alt="locoCala" />
			<a
				className="sidebar-brand d-flex align-items-center justify-content-center"
				href="/"
			>
				<div className="sidebar-brand-text mx-3"> {props.name} </div>
			</a>
		</div>
	);
}

export default AdminCard;
