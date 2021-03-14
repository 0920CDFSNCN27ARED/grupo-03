import React, { Component } from "react";
import CardTableProductDetail from "./data-card-table-productDetail/CardTableProductDetail";

class DataCardTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableProductDetailValue: [
				{
					name: "n/a",
					description: "n/a",
					price: "n/a",
					category: "n/a",
					discount: "n/a",
					color: "n/a",
				},
			],
		};
	}

	render() {
		return (
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table
							className="table table-bordered"
							id="dataTable"
							width="100%"
							cellspacing="0"
						>
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
									<th>Categories</th>
									<th>Discount</th>
									<th>Colors</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
									<th>Categories</th>
									<th>Discount</th>
									<th>Colors</th>
								</tr>
							</tfoot>
							<tbody>
								{this.state.tableProductDetailValue.map((elem, index) => {
									return (
										<CardTableProductDetail
											key={index}
											name={elem.name}
											description={elem.description}
											price={elem.price}
											category={elem.category}
											discount={elem.discount}
											color={elem.color}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default DataCardTable;
