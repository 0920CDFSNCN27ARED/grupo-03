const fs = require("fs");

function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../data/product-database.json", {
    encoding: "utf-8",
  });
  return JSON.parse(dbJson);
}

module.exports = getProducts;
