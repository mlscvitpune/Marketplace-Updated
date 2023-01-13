import express from 'express';

import authRoutes from './routes/auth.routes.js'; 
import itemRoutes from './routes/item.routes.js';
import cartRoutes from './routes/cart.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/item', itemRoutes);
router.use('/cart', cartRoutes);

export default router;