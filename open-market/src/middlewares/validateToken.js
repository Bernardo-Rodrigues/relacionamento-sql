import connection from "../db.js"

export default async function validateTokenMiddleware(req, res, next){
    try {
        const token = req.headers.authorization?.replace("Bearer ", "")
        
        if(!token) return res.sendStatus(401)
    
        const {rows:[session]} = await connection.query(`
            SELECT  *
              FROM  sessoes
             WHERE  token = $1
        `, [token])
        if(!session) return res.sendStatus(401)
        res.locals.session = session
        
        next()
    } catch (error) {
        res.status(500).send(error);
    }
}