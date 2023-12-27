const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());    // middleware handle CORS issues on every request
app.get('/',function(req,res) {
const principal = parseInt(req.query.principal);
const rate = parseInt(req.query.rate);
const time = parseInt(req.query.time);
const interest = (principal * rate * time) /100;
const total = principal+ interest;
res.send({
    total :total,
    interest:interest,
})
});
app.listen(3000,()=> {
    console.log("server running in port 3000")
})