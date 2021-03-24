import "./App.css";
import SideMenu from "./components/side-menu/SideMenu";
import Header from "./components/header/Header";
import DataCardSmall from "./components/data-cards/data-card-small/DataCardSmall";
import DataCardBig from "./components/data-cards/data-card-big/DataCardBig";
import CategoryCard from "./components/category-card/CategoryCard";
import Footer from "./components/footer/Footer";
import DataCardTable from "./components/data-cards/Data-card-table/DataCardTable";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smallCardsValue: [
				{
					title: "Products in Data Base",
					icon: " fa-clipboard-list",
					value: "n/a",
					color: "primary",
				},
				{
					title: "Amount in products",
					icon: " fa-dollar-sign",
					value: "$546.456",
					color: "success",
				},
				{
					title: "Users quantity",
					icon: " fa-user-check",
					value: "38",
					color: "warning",
				},
			],
			bigDataCardValue:[
				{
					name: "n/a",
					image: "n/a",
					description:"n/a",
				}
			],
		};
	}
	async componentDidMount() {
		const productsApi = await fetch(
			"http://localhost:3001/api/products/products"
		);
		const usersApi = await fetch("http://localhost:3001/api/users/users");

		const countUsers = await usersApi.json();
		const countProducts = await productsApi.json();
		const smallCardsValue = [
			{
				title: "Products in Data Base",
				icon: " fa-clipboard-list",
				value: countProducts.data.totalCount,
				color: "primary",
			},
			{
				title: "Amount in products",
				icon: " fa-dollar-sign",
				value: countProducts.data.totalPrice,
				color: "success",
			},
			{
				title: "Users quantity",
				icon: "fa-user-check",
				value: countUsers.data.totalCount,
				color: "warning",
			},
		];
		const latestApi = await fetch(
			"http://localhost:3001/api/products/latest");
		const latest = await latestApi.json();	
		 console.log(latest);
        const bigDataCardValue = [
			{
				name: latest.data.producto.name,
				image: latest.data.producto.image,
				description:latest.data.producto.description,
			}
		];

		this.setState({
			smallCardsValue,bigDataCardValue
		},
		);
	}

	render() {
		return (
			<div className="App">
				<div id="wrapper">
					<SideMenu />
					<div id="content-wrapper" className="d-flex flex-column">
						<div id="content">
							<Header />
							<div className="container-fluid">
								<div className="d-sm-flex align-items-center justify-content-between mb-4">
									<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
								</div>
								<div className="row">
									{this.state.smallCardsValue.map((elem, index) => {
										return (
											<DataCardSmall
												key={index}
												title={elem.title}
												icon={elem.icon}
												value={elem.value}
												color={elem.color}
											/>
										);
									})}
								</div>
								<div className="row">
								{this.state.bigDataCardValue.map((elem, index) => {
										return (
											<DataCardBig
												key={index}
												name={elem.name}
												image={elem.image}
												description={elem.description}
												
											/>
										);
									})}

									<CategoryCard />
								</div>
								<h1 className="h3 mb-2 text-gray-800">
									All the products in the Database
								</h1>
								<DataCardTable />
							</div>

							<Footer />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
