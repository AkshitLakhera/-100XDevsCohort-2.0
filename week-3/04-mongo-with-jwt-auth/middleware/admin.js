// Middleware for handling auth
const jwt = require("jsonwebtoken");
const secret = require('secret')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token  = req?.headers?.authorization?.split(" ")[1]; //authorization should written in lowercase
    if (!token) {
         return res.status(401).send({ message: "Unauthorized" });
      } 
      try {
        jwt.verify(token, secret,(err,data)=> {
            if(err){
                 return res.status(401).send({ message: "Unauthorized" });
            } else {
                req._id = data._id;
                next();
            }
        })

      } catch(e) {
        res.status(500).send({ message: "Error verying token", error: error })
      }
}

module.exports = adminMiddleware;