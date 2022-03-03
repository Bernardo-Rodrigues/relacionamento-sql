import { Router } from "express";
import { login, register } from "../controllers/usersController.js";
import validateSchemaMiddleware from "../middlewares/validateSchema.js";

const usersRouter = Router()

usersRouter.post("/register", validateSchemaMiddleware, register)
usersRouter.post("/login", validateSchemaMiddleware, login)

export default usersRouter;