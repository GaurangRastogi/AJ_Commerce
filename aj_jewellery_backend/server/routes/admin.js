const express = require("express");
const router = express.Router();
const adminController=require("../controller/admin");



router.post('/addProduct',adminController.addProduct);
//update Product, deleteProduct, deliverProduct,getAllProduct -> so it's viewed as list

/*

signUp,
signIn,
addProduct
updateProduct
 */
module.exports=router;