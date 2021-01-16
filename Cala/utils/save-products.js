const fs = require("fs");

function saveProducts(products) {
  const productsJson = JSON.stringify(products, null, 4);
  fs.writeFileSync("data/product-database.json", productsJson);
}

module.exports = saveProducts;
