var para=document.querySelector("p");

function Time(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    minutes=formation(minutes);
    seconds=formation(seconds);
    para.textContent=hours+":"+minutes+":"+seconds;
}
function formation(value){
 if(value<10){
    value="0"+value;
 }
 return value;
}

setInterval(Time,1000);