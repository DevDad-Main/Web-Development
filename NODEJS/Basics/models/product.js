const fs = require("fs");
const path = require("path");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json",
    );

    // Getting the exisiting contents of the file.
    // We also have to use an arrow function here so we can use.push(this);
    // because if weadded a function it would loose its context
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      // If we don't have an error, so we have an exisiting file then we just
      // Parse the data or "read" the data.
      if (!err) {
        products = JSON.parse(fileContent);
      }

      // If we do have an error which means no file then we either have data in the array
      // or we have an empty array
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // products.push(this);
  }

  /**
   * Utility function to fetch all products in the products array
   * @returns All the items in the product array
   */
  static fetchAll() {
    return products;
  }
};
