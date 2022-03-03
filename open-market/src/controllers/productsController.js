import connection from "../db.js";

export async function listProducts(req,res){
    try {
        const { rows: products} = await connection.query(`
            SELECT  produtos.*,
                    categorias.nome AS "nomeCategoria"
              FROM  produtos
              JOIN "produtosCategorias"
                ON  produtos.id = "produtosCategorias"."idProduto"
              JOIN  categorias 
                ON  "produtosCategorias"."idCategoria" = categorias.id
        `)
        res.send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function insertProduct(req,res){
    const {nome, preco} = req.body
    const {idUsuario} = res.locals.session

    try {
        await connection.query(`
            INSERT INTO  produtos (nome, preco, "idUsuario")
                 VALUES  ($1, $2, $3)
        `, [ nome, preco, idUsuario])
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteProduct(req,res){
    const { id } = req.params

    try {
        await connection.query(`
            DELETE  
              FROM  produtos
             WHERE  id = $1
        `, [id])
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function updateProduct(req,res){
    const { id } = req.params
    const { nome, preco } = req.body
    try {
        await connection.query(`
            UPDATE  produtos
               SET  nome = $1,
                    preco = $2
             WHERE  id = $3
        `, [nome, preco, id])
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}