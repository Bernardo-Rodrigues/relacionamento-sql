import connection from "../db.js";

export async function listProductsCategories(req,res){
    try {
        const { rows: products} = await connection.query(`
            SELECT  *
              FROM  "produtosCategorias"
        `)
        res.send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function insertProductCategorie(req,res){
    const {idProduto, idCategoria} = req.body

    try {
        await connection.query(`
            INSERT INTO  "produtosCategorias" ("idProduto", "idCategoria")
                 VALUES  ($1, $2)
        `, [ idProduto, idCategoria])
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteProductCategorie(req,res){
    const { id } = req.params

    try {
        await connection.query(`
            DELETE  
              FROM  "produtosCategorias"
             WHERE  id = $1
        `, [id])
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function updateProductCategorie(req,res){
    const { id } = req.params
    const { idProduto, idCategoria } = req.body

    try {
        await connection.query(`
            UPDATE  "produtosCategorias"
               SET  "idProduto" = $1,
                    "idCategoria" = $2
             WHERE  id = $3
        `, [idProduto, idCategoria, id])
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}