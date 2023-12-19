const express = require("express");
const app =express();
const users = [{
    name :'john',
    kidneys: [{
        healthy:false
    }]
}]
// To get json  body on server  you  have to use app.use(express.json()) as body parser
app.use(express.json()); 
app.get("/",function(req,res){
    // write logic
    const johnKidneys= users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    // logic
    let healthykidneys = 0
    for(let i = 0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthykidneys= healthykidneys+1;
        }
    }
const unhealthyKidneys = numberOfKidneys-healthykidneys;
res.json({
    numberOfKidneys,
    healthykidneys,
    unhealthyKidneys
})
})
app.post("/",function(req,res) {
    const  isHealthy = req.body.isHealthy;        
    users[0].kidneys.push({
        healthy:isHealthy
    });
     res.json ({
        msg:"done"
     })
})
app.put("/", function(req,res) {
    const johnKidneys = users[0].kidneys;
    for(let i=0;i<johnKidneys.length;i++){
        johnKidneys[i].healthy= true;
    }
    res.json({});
})
app.delete("/",function(){
    if (!healthykidneys){
const newkidneys=[];
for(let i=0;users[0].kidneys.length;i++){
    newkidneys.push({
        healthy:true
    })
}
users[0].kidneys=newkidneys;
res.jspn({msg:'done'})}
})
app.listen(3000);
