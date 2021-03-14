import React from "react";

function CardTableProductDetail(props) {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.description}</td>
			<td>{props.price}</td>
			<td>{props.categoryId}</td>
			<td>{props.discount}</td>
			<td>{props.color}</td>
		</tr>
	);
}

export default CardTableProductDetail;
