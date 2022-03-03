import joi from "joi"

const categoriesSchema = joi.object({
    nome: joi.string().required(),
});

export default categoriesSchema