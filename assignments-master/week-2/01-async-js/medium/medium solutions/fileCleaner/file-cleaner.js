const fs = require('fs');
const filepath= "name.text";
fs.readFile(filepath,'utf-8',(err ,data) =>{
    if(err){
        console.log("Error occured",err);
    } else {
        const cleanedData = data.replace(/\s+/g,'');
        fs.writeFile(filepath,cleanedData,'utf-8',(err,data)=> {
            if(err){
                console.log("Error occured",err)
            }
            console.log("Cleand data successful written");
        })
    }
})
