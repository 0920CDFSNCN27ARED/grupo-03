import React from "react";
import PropTypes from "prop-types";

function ProductCategory(props) {
	return (
		<div className="col-lg-6 mb-4">
			<div className="card bg-info text-white shadow">
				<div className="card-body">
					<span>{props.name}</span> <br></br>
					<span> Total de productos = {props.totalCount}</span>
				</div>
			</div>
		</div>
	);
}

ProductCategory.propsTypes = {
	number: PropTypes.string,
};
export default ProductCategory;
