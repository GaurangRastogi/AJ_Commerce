const Admin = require("../models/admin");
const User = require("../models/user");
const Product = require("../models/product");
const Order = require("../models/order");
const Cart=require('../models/cart');

exports.addProduct = async (req, res) => {
  try {
    const nameIfPresent = await Product.find({
      productName: req.body.productName,
    });
    if (nameIfPresent.length !== 0) {
      return res
        .status(200)
        .send({
          message: "Product Already Present, if you want to add items Update!",
        });
    } else {
      const newProduct = new Product({
        productName: req.body.productName,
        productQuantity: req.body.productQuantity,
        productWeight:req.body.productWeight,
        productType: req.body.productType,
        productMetal: req.body.productMetal,
        productPurety: req.body.productPurety,
        productPhoto: req.body.productPhoto,
      });

      await newProduct.save();
      res.status(200).send({ message: "Product Added" });
    }
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

require("../middleware/database");
