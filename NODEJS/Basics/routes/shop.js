const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log("Shop.js: ", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // So we are only rendering the template below, so we can now grab
  // The product data from our other routes and then pass it into render.
  // To use in our shop.pug file
  const products = adminData.products;

  // We dont need to specify the path as express.set() will automatically use the cwd + views.
  // Then render returns the default tempalting engine and we have specified that pug will be the new default.
  // Templating engine, so we dont have specify the shop.pug
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    pageTitle: "Shop",
  });
});

module.exports = router;
