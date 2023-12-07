function  updatedTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const mins = currentTime.getMinutes();
    const secs = currentTime.getSeconds();
    const formattedTime = `${hours}:${mins}:${secs}`
    console.log(formattedTime)
}
setInterval(updatedTime,1000);
// Initial  update
updatedTime();