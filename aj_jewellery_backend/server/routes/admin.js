const express = require("express");
const router = express.Router();
const adminController=require("../controller/admin");



router.post('/addProduct',adminController.addProduct);

/*

signUp,
signIn,
addProduct
updateProduct
 */
module.exports=router;