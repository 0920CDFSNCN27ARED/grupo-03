import React from "react";
import image from "../../../assets/dummy-avatar.jpg";

function HeaderUserProfile(){
    
return(
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
         <span className="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
         <img className="img-profile rounded-circle" src={image} width="60"alt= "User Profile"/>
      </a>
     </li>
 );
}

export default HeaderUserProfile;