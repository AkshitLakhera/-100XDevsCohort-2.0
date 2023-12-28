const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const secret= 'akshit';

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
module.exports=secret;