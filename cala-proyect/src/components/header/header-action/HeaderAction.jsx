import React from "react";
import HeaderUserProfile from "../header-user-profile/HeaderUserProfile";


function HeaderAction (){
 
    return(

   <ul className="navbar-nav ml-auto">

     <li className="nav-item dropdown no-arrow mx-1">
       <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
             <i className="fas fa-bell fa-fw"></i>
             <span className="badge badge-danger badge-counter">3+</span>
        </a>
      </li>


     <li className="nav-item dropdown no-arrow mx-1">
       <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
           <i className="fas fa-envelope fa-fw"></i>
    
           <span className="badge badge-danger badge-counter">7</span>
       </a>
     </li>

     <div className="topbar-divider d-none d-sm-block"></div>

     <HeaderUserProfile/>

    </ul>
 );

}

export default HeaderAction;
