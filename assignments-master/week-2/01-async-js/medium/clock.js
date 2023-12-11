// Part one
function currentTime (){
    const time = new Date();
    const hour = time.getHours();
    const min =  time.getMinutes();
    const sec =   time.getSeconds();
    console.log(`${hour}:${min}:${sec} `)
  }
  setInterval(currentTime,1000);


// Part -2 

  function currentTime (){
    const time = new Date();
    let  hour = time.getHours();
    const min =  time.getMinutes();
    const sec =   time.getSeconds();
    if (hour >12){
      hour = hour -12 ;
    }
    console.log(`${hour}:${min}:${sec} `)
  }
  setInterval(currentTime,1000);