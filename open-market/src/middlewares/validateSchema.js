import trim from "trim"
import { stripHtml } from "string-strip-html"
import registerSchema from "../schemas/registerSchema.js"
import loginSchema from "../schemas/loginSchema.js"
import productsSchema from "../schemas/productsSchema.js"
import categoriesSchema from "../schemas/categoriesSchema.js"
import productsCategoriesSchema from "../schemas/productsCategoriesSchema.js"

function sanitizeString(string){
    return trim(stripHtml(string).result)
}

const schemas = {
    "/register": registerSchema,
    "/login": loginSchema,
    "/products": productsSchema,
    "/categories": categoriesSchema,
    "/relations": productsCategoriesSchema
}

export default async function validateSchemaMiddleware(req, res, next){
    const { body } = req
    const schema = schemas["/"+req.path.split("/")[1]]
    
    Object.keys(body).forEach( key => {
        if(typeof(body[key]) === "string") body[key] = sanitizeString(body[key])
    })

    const validation = schema.validate(body, { abortEarly: false })
    if(validation.error) return res.status(422).send(validation.error.message)

    next()
}