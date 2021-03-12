import React from "react";
import SideMenuHeader from "./side-menu-header/SideMenuHeader";
import SideMenuLink from "./side-menu-link/SideMenuLink";

function SideMenu(){
 
const sideMenuLinkValue = [

  {
  title : "Pages",
  icon : "fa-folder",
  
  },
  {
  title : "Charts", 
  icon : " fa-chart-area",
  },

  {
  title : "Tables",
  icon : " fa-table",
  },
     
];

 return (
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"> 

<SideMenuHeader />

  <hr className="sidebar-divider my-0"/>

 <SideMenuLink/>

 <hr className="sidebar-divider"/>

 <div className="sidebar-heading">Actions</div>
   {sideMenuLinkValue.map((elem,index)=>{
     return(
      <SideMenuLink
       key={index}
       title={elem.title}
       icon={elem.icon}
      
       />
     )
   })

   
  }
 

  <hr className="sidebar-divider d-none d-md-block"/>
  </ul>
 );
 }


export default SideMenu;

