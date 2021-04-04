import { React, Component } from "react";
import ProductCategory from "./products-category/ProductCategory";

class categoryCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productCategoryValue: [
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
				{ name: "n/a", totalCount: "n/a" },
			],
		};
	}

	async componentDidMount() {
		const productsApi = await fetch(
			"http://localhost:3001/api/products/products"
		);
		const productsList = await productsApi.json();
		const productCategoryValue = [
			{
				name: productsList.data.categoriesList[0].name,
				totalCount: productsList.data.countByCategory.countCategory1,
			},
			{
				name: productsList.data.categoriesList[1].name,
				totalCount: productsList.data.countByCategory.countCategory2,
			},
			{
				name: productsList.data.categoriesList[2].name,
				totalCount: productsList.data.countByCategory.countCategory3,
			},
			{
				name: productsList.data.categoriesList[3].name,
				totalCount: productsList.data.countByCategory.countCategory4,
			},
			{
				name: productsList.data.categoriesList[4].name,
				totalCount: productsList.data.countByCategory.countCategory5,
			},
			{
				name: productsList.data.categoriesList[5].name,
				totalCount: productsList.data.countByCategory.countCategory6,
			},
			{
				name: productsList.data.categoriesList[6].name,
				totalCount: productsList.data.countByCategory.countCategory7,
			},
			{
				name: productsList.data.categoriesList[7].name,
				totalCount: productsList.data.countByCategory.countCategory8,
			},
		];

		this.setState({
			productCategoryValue,
		});
	}

	render() {
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">
							Categorias de productos
						</h6>
					</div>
					<div className="card-body">
						<div className="row">
							{this.state.productCategoryValue.map((elem, index) => {
								return (
									<ProductCategory
										key={index}
										name={elem.name}
										totalCount={elem.totalCount}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default categoryCard;
