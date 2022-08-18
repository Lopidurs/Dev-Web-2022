const {verify} = require("jsonwebtoken")

const validateToken = (req, res, next) => {
    /*Cette fonction va récupérer un token et vérifier qu'il est légitime. Ensuite il stocke les infos du token
     dans "user" et repasse la main
        PRE : un token
        POST : /
        */
    const accessToken = req.header("accessToken")

    if (!accessToken) return res.json({error: "L'utilisateur n'est pas connecter"})
    try {
        const validToken = verify(accessToken, "Af8974sgqqszryhbh")
        req.user = validToken
        if (validToken) {
            return next()
        }
    } catch (err) {
        return res.json({error: "Wrong token"})
    }
}

module.exports = {validateToken}