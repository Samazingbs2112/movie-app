const jwt = require("jsonwebtoken");
 const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';

 module.exports = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];
        const decryptedToken = jwt.verify(accessToken, SECRET_KEY);
        req.userId = decryptedToken.userId;
        next();

     } catch (error) {
         res.status(401).send({message: "error"})
     }
 }