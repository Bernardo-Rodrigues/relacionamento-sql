import { Router } from "express";
import { deleteProductCategorie, insertProductCategorie, listProductsCategories, updateProductCategorie } from "../controllers/productsCategoriesController.js";
import validateSchemaMiddleware from "../middlewares/validateSchema.js";
import validateTokenMiddleware from "../middlewares/validateToken.js";

const productsCategoriesRouter = Router()

productsCategoriesRouter.get("/relations", listProductsCategories)
productsCategoriesRouter.post("/relations", validateSchemaMiddleware, validateTokenMiddleware, insertProductCategorie)
productsCategoriesRouter.delete("/relations/:id", validateTokenMiddleware, deleteProductCategorie)
productsCategoriesRouter.put("/relations/:id", validateSchemaMiddleware, validateTokenMiddleware, updateProductCategorie)

export default productsCategoriesRouter;