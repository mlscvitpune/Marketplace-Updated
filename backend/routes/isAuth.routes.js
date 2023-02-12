import express from 'express';
import authMiddleware from '../middlewares/isAuth.js';

const router = express.Router();
router.get('/', authMiddleware);

export default router;