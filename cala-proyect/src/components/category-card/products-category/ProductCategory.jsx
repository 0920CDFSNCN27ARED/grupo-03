import React from "react";
import PropTypes from "prop-types";

function ProductCategory(props){
   return(

	<div class="col-lg-6 mb-4">
    <div class="card bg-info text-white shadow">
        <div class="card-body">
          Category {props.number}
        </div>
    </div>
</div>

   );
}

ProductCategory.propsTypes = {
    number: PropTypes.string,
}
 export default ProductCategory;