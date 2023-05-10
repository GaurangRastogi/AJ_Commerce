const express = require("express");
const router = express.Router();
const userController=require("../controller/user");



router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);
router.get('/getProductItems',userController.getProductItems);
router.get('/getProductByTypes',userController.getProductByTypes);
router.get('/getProductItem/:search',userController.getProductItem);

//cart routes
router.get('/cartItems/:userId',userController.cartItemsByUserID);
router.get('/cartItems/:userId/:productId',userController.cartItemByUserIdProductId);
router.post('/addToCart',userController.addToCart);
router.delete('/removeFromCart',userController.removeFromCart);

/*

i) getProducts
getProducts,
getProduct/:id
addToCart
removeFromCart
updateProfile
myProfile

myProducts /products in cart

order //take care of quantity while ordering
orderHistory
 */

module.exports=router;