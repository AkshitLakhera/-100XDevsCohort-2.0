let fs = require("fs");
let filepath = "name.text";
const filedata =
  "loreem asdbasdorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
fs.writeFile(filepath, filedata, "utf-8", (err, data) => {
  if (err) {
    console.log("Error found", err);
    return;
  }
  console.log("Data have been successfull submited");
});
let count = 0;
for (let i = 0; i < 1000; i++) {
  count += i;
}
console.log(count);
