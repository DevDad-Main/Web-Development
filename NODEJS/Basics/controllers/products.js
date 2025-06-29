const products = [];

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
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  console.log("Shop.js: ", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // So we are only rendering the template below, so we can now grab
  // The product data from our other routes and then pass it into render.

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
