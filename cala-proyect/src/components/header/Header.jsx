import React, { Component } from "react";
import HeaderAction from "./header-action/HeaderAction";
class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
			headerProfileValue:[
				{
					name: "n/a",
					image: "n/a",
				}
			],
		};
	}
	 async componentDidMount(){
		const userApi = await fetch(
			"http://localhost:3001/api/users/admin"
		);
		const user = await userApi.json();
		console.log(user);
		const 	headerProfileValue=[
			{
				name: user.name,
				image: "n/a",
			}
		];
		
		this.setState({
			headerProfileValue
		})
	}
   
 render(){

    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					 <HeaderAction/>
				</nav>
    )

}}

export default Header;