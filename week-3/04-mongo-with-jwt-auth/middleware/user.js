const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token  = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
         return res.status(401).send({ message: "Unauthorized" });
      } 
      try {
        jwt.verify(token, process.env.JWT_KEY,(err,data)=> {
            if(err){
                 return res.status(401).send({ message: "Unauthorized" });
            } else {
                req._id = data._id;
                next();
            }
        })

      } catch(e) {
        res.status(500).send({ message: "Error in verying token", error: error })
      }
}

module.exports = userMiddleware;