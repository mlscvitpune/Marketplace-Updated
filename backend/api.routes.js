import express from 'express';

import authRoutes from './routes/auth.routes.js'; 
import itemRoutes from './routes/item.routes.js';
import cartRoutes from './routes/cart.routes.js';
import routerAuthentication from './routes/isAuth.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/item', itemRoutes);
router.use('/cart', cartRoutes);
router.use('/isAuth', routerAuthentication)

export default router;