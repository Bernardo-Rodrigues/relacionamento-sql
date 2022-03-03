import joi from "joi"

const productsCategoriesSchema = joi.object({
    idProduto: joi.number().required(),
    idCategoria: joi.number().required(),
});

export default productsCategoriesSchema