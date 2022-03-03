import joi from "joi"

const loginSchema = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().alphanum().required()
});

export default loginSchema