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
    
						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div class="card-body">
									<div class="row">
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