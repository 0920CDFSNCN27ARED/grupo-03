import React, { Component } from "react";
import AdminCard from "./AdminCard";
class SideMenuHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adminName: [{ name: "n/a" }],
		};
	}

	async componentDidMount() {
		const userApi = await fetch("http://localhost:3001/api/users/admin");
		const user = await userApi.json();
		console.log(user);
		const adminName = [
			{
				name: user.data[0].firstName,
			},
		];
		console.log(adminName);
		this.setState({
			adminName,
		});
	}

	render() {
		return (
			<div>
				{this.state.adminName.map((elem, index) => {
					return <AdminCard name={elem.name} />;
				})}
			</div>
		);
	}
}
export default SideMenuHeader;
