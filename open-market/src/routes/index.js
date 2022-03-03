import { Router } from 'express';
import categoriesRouter from './categoriesRouter.js';
import productsCategoriesRouter from './productsCategoriasRouter.js';
import productsRouter from './productsRouter.js';
import usersRouter from './usersRouter.js';

const router = Router();
router.use(usersRouter)
router.use(productsRouter)
router.use(categoriesRouter)
router.use(productsCategoriesRouter)

export default router;