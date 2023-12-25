// Accessing Admin model from database
const { Admin, User, Course } = require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username,password} = req.header;
    const verifiedusername = await Admin.findOne({username:username,password:password});
    if(!verifiedusername) {
        res.status(404).send("Unauthorized user")
    } else {
        next();
    }
}

module.exports = adminMiddleware;
