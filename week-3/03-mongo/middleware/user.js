const {User} = require('../db/');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username,password} = req.header;
    const verifiedusername = await User.findOne({username:username,password:password});
    if(!verifiedusername){
        res.status(404).send("Unauthorized user");
    }
    else{
        next();
    }
}

module.exports = userMiddleware;