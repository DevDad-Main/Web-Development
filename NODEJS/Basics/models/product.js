const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  /**
   * Utility function to fetch all products in the products array
   * @returns All the items in the product array
   */
  static fetchAll() {
    return products;
  }
};
