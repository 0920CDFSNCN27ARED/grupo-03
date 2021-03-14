import React from "react";
import CardTableProductDetail from "./data-card-table-productDetail/CardTableProductDetail";
function DataCardTable(props){
    const tableProductDetailValue = [
      {
        name:"Tiger Nixon",
        description :" System Architect" ,
        price: "$320,800",
        category:
        {
            value1: "category 01",
            value2: "category 02",
            value3: "category 03",
        },
        discount:"245",
        color: 
        {
            valueR: "Red",
            valueB: "Blue",
            valueG: "Green",
        },
      },
      {
        name:"Jane Doe",
        description :"Fullstack developer" ,
        price: "$320,800",
        category:
        {
            value1: "category 01",
            value2: "category 02",
            value3: "category 03",
        },
        discount:"245",
        color: 
        {
            valueR: "Red",
            valueB: "Blue",
            valueG: "Green",
        },
      },
    ]
    return( 
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                            {tableProductDetailValue.map((elem, index) => {
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
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DataCardTable;