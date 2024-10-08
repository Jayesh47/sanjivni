const express = require('express');
const router = express.Router();
const product = require('../controllers/products/productController');
const payment = require('../controllers/products/payment');
const cart = require('../controllers/products/cartController');

router.put("/retrive-products", product.ProductRetrive);
router.get("/recent-products", product.RecentProducts);
router.get("/add-to-cart", cart.addToCart);
router.get('/check-cart', cart.checkCart);
router.delete('/remove-cartItem', cart.removeCartItem);
router.get('/cart-details', cart.cartDetails);
router.post('/payment-gateway', payment.productPurchased);
router.put('/update-quantity', cart.updateQty);

module.exports = router;