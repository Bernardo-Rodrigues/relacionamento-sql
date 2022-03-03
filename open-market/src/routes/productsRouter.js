import { Router } from "express";
import { deleteProduct, insertProduct, listProducts, updateProduct } from "../controllers/productsController.js";
import validateSchemaMiddleware from "../middlewares/validateSchema.js";
import validateTokenMiddleware from "../middlewares/validateToken.js";

const productsRouter = Router()

productsRouter.get("/products", listProducts)
productsRouter.post("/products", validateSchemaMiddleware, validateTokenMiddleware, insertProduct)
productsRouter.delete("/products/:id", validateTokenMiddleware, deleteProduct)
productsRouter.put("/products/:id", validateSchemaMiddleware, validateTokenMiddleware, updateProduct)

export default productsRouter;