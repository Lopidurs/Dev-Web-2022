const {verify} = require("jsonwebtoken")

const validateToken = (req, res, next) =>{
    const accessToken = req.header("accessToken")

    if (!accessToken) return res.json({error: "L'utilisateur n'est pas connecter"})
    try {
        const validToken = verify(accessToken, "Af8974sgqqszryhbh")
        req.user = validToken
        if (validToken) {
            return  next()
        }
    } catch (err) {
        return res.json({error: "Wrong token"})
    }
}

module.exports = {validateToken}