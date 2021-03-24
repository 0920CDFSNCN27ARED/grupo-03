import React from "react";


function HeaderUserProfile(props){
    
return(
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
         <span className="mr-2 d-none d-lg-inline text-gray-600 small">{props.name}</span>
         <img className="img-profile rounded-circle" src={props.image} width="60"alt= "User Profile"/>
      </a>
     </li>
 );
}

export default HeaderUserProfile;