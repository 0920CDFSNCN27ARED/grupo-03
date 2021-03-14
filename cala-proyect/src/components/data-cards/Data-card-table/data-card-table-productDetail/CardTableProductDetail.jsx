import React from "react";

function CardTableProductDetail (props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>
                <ul>
                    <li>{props.category.value1}</li>
                    <li>{props.category.value2}</li>
                    <li>{props.category.value3}</li>
                </ul>
            </td>
            <td>{props.discount}</td>
            <td>
                <ul>
                    <li><span className="text-danger">{props.color.valueR}</span></li>
                    <li><span className="text-primary">{props.color.valueB}</span></li>
                    <li><span className="text-success">{props.color.valueG}</span></li>
                </ul>
            </td>
        </tr>
    )
} 

export default CardTableProductDetail