import React, { Component } from "react";
import HeaderUserProfile from "../header-user-profile/HeaderUserProfile";

class HeaderAction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerProfileValue: [
				{
					name: "n/a",
					image: "n/a",
				},
			],
		};
	}

	async componentDidMount() {
		const userApi = await fetch("http://localhost:3001/api/users/admin");
		const user = await userApi.json();
		console.log(user);
		const headerProfileValue = [
			{
				name: user.data[0].user,
				image: "http://localhost:3001/images/users/" + user.data[0].image,
			},
		];

		this.setState({
			headerProfileValue,
		});
	}

	render() {
		return (
			<ul className="navbar-nav ml-auto">
				{/*<li className="nav-item dropdown no-arrow mx-1">
					<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
						<i className="fas fa-bell fa-fw"></i>
						<span className="badge badge-danger badge-counter">3+</span>
					</a>
				</li>

				 <li className="nav-item dropdown no-arrow mx-1">
					<a
						className="nav-link dropdown-toggle"
						href="/"
						id="messagesDropdown"
					>
						<i className="fas fa-envelope fa-fw"></i>

						<span className="badge badge-danger badge-counter">7</span>
					</a>
				</li> */}

				<div className="topbar-divider d-none d-sm-block"></div>

				{this.state.headerProfileValue.map((elem, index) => {
					return (
						<HeaderUserProfile
							key={index}
							name={elem.name}
							image={elem.image}
						/>
					);
				})}
			</ul>
		);
	}
}

export default HeaderAction;
