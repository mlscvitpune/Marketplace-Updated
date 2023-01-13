import express from 'express';

import { addToCart, getCart, removeFromCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add', addToCart);
router.post('/read/:username', getCart);
router.delete('/delete', removeFromCart);

export default router;