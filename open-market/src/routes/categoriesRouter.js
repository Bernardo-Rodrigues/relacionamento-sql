import { Router } from "express";
import { deleteCategorie, insertCategorie, listCategories, updateCategorie } from "../controllers/categoriesController.js";
import validateSchemaMiddleware from "../middlewares/validateSchema.js";
import validateTokenMiddleware from "../middlewares/validateToken.js";

const categoriesRouter = Router()

categoriesRouter.get("/categories", listCategories)
categoriesRouter.post("/categories", validateSchemaMiddleware, validateTokenMiddleware, insertCategorie)
categoriesRouter.delete("/categories/:id", validateTokenMiddleware, deleteCategorie)
categoriesRouter.put("/categories/:id", validateSchemaMiddleware, validateTokenMiddleware, updateCategorie)

export default categoriesRouter;