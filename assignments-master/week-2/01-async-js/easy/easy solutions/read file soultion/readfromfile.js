// Learning
//  ## fs is async operation in node js where we can read and write file from file system ,so when it start excecuting it do process in web api and till then rest of code work synchrons manner and if the sync code in extensive it will take time if in between file system is ready it will not print the code util the thread will get free fron synchronus code.

const fs = require("fs");
const filepath = "name.text";
fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log("Error came", err);
  }
  console.log("Data readed", data);
});
let count= 0
for( let i= 0; i<100;i++){
 count++
}
console.log(count);
