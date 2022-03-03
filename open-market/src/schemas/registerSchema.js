import joi from "joi"

export const registerSchema = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    senha: joi.string().alphanum().required()
});

export default registerSchema