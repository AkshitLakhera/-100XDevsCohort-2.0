const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
// The app.use method is used to include the imported routers (adminRouter and userRouter) as middleware
// 
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)
//     These lines mean that any request with a path starting with /admin will be directed to the adminRouter, and any request with a path starting with /user will be directed to the userRouter.
// This is a way to modularize your routes and keep them organized.

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
