const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // This wont't specifically move onto the next middleware.
  // As we need to specify the next keyword;
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  console.log(rootDir);
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
