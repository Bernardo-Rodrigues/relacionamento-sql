import joi from "joi"

const productsSchema = joi.object({
    nome: joi.string().required(),
    preco: joi.number().required()
});

export default productsSchema