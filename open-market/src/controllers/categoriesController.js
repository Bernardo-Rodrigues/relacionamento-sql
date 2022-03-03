import connection from "../db.js";

export async function listCategories(req,res){
    try {
        const { rows: categories} = await connection.query(`
            SELECT  *
              FROM  categorias
        `)
        res.send(categories)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function insertCategorie(req,res){
    const {nome} = req.body

    try {
        await connection.query(`
            INSERT INTO  categorias (nome)
                 VALUES  ($1)
        `, [ nome ])
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteCategorie(req,res){
    const { id } = req.params

    try {
        await connection.query(`
            DELETE  
              FROM  categorias
             WHERE  id = $1
        `, [id])
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function updateCategorie(req,res){
    const { id } = req.params
    const { nome } = req.body
    
    try {
        await connection.query(`
            UPDATE  categorias
               SET  nome = $1
             WHERE  id = $2
        `, [nome, id])
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}