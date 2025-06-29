const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // This wont't specifically move onto the next middleware.
  // As we need to specify the next keyword;
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    // Boolean used to activate the specific style sheets
    formCSS: true,
    // Boolean used to activate the specific style sheets
    productCSS: true,
    // Boolean passed to our ejs template to add the class active for this page
    activeAddProduct: true,
  });
  // console.log(rootDir);
};

exports.postAddProduct = (req, res, next) => {
  // Creating our class product here so we can define new products whenver the admin makes one
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log("Shop.js: ", products);

  // We dont need to specify the path as express.set() will automatically use the cwd + views.
  // Then render returns the default tempalting engine and we have specified that pug will be the new default.
  // Templating engine, so we dont have specify the shop.pug
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    pageTitle: "Shop",
    hasProducts: products.length > 0,
  });
};
