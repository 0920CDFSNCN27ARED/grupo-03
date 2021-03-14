import React from "react";
import ProductCategory from "./products-category/ProductCategory";
function CategoryCard() {
  
	const productCategoryValue = [
	       { 	
		   number: "1"
	       },
		   { 	
			number: "2"
		   },
		   { 	
			number: "3"
		   },
		   { 	
			number: "4"
		   },
		   { 	
			number: "5"
		   },
		   { 	
			number: "6"
		   },
			
	];
	
	return  (
    
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div className="card-body">
									<div className="row">
									  { productCategoryValue.map((elem,index)=>{
										  return( <ProductCategory
											key={index}
											number ={elem.number}
											/>);
									  })}
									  
										
  
									</div>
								</div>
							</div>
                    	</div>
         );
}

export default CategoryCard;