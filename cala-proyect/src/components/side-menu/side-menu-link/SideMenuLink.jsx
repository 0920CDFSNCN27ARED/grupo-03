import React from "react";
import PropTypes from "prop-types";

function SideMenuLink(props){
return(
    <li className={`nav-item ${props.active}`}>
    <a className="nav-link" href="/">
        <i className={`fas fa-fw  ${props.icon}`}></i>
        <span>{props.title}</span></a>
 </li>
);
}

SideMenuLink.propsTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    active: PropTypes.string,

}
SideMenuLink.defaultProps = {
	title: "Dashboard",
    icon:  "fa-tachometer-alt",
    active:"active",
}

export default SideMenuLink;