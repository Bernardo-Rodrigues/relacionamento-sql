import connection from "../db.js"
import bcrypt from "bcrypt"
import { v4 as tokenGenerator} from "uuid"

export async function register(req, res){
    let {nome, email, senha} = req.body
    senha = bcrypt.hashSync(senha, 10)

    try {
        await connection.query(`
            INSERT INTO  usuarios (nome, email, senha)
                 VALUES  ($1, $2, $3)
        `,[ nome, email, senha])

        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function login(req, res){
    const { email, senha} = req.body

    try {
        const { rows: [user]} = await connection.query(`
            SELECT  *
              FROM  usuarios
             WHERE  email = $1
        `,[ email])

        if(user && bcrypt.compareSync(senha, user.senha)){
            const token = tokenGenerator();

            await connection.query(`
                INSERT INTO  sessoes ("idUsuario", token)
                    VALUES  ($1, $2)
            `,[ user.id, token])

            return res.status(200).send({token, username:user.nome});

        } else {
            return res.status(401).send("Participante não existe")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

    res.send(users)

}