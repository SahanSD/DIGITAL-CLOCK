setInterval(updateClock, 1000);

function updateClock(){
    var myDate= new Date();
    var myHour= myDate.getHours();
    var myMinute= myDate.getMinutes();
    var mySecond=myDate.getSeconds();

    if(myHour<10){myHour= "0" + myHour;}
    if(myMinute<10){myMinute= "0" + myMinute;}
    if(mySecond<10){mySecond= "0" + mySecond;}

    var myClock= myHour + ":" + myMinute + ":" + mySecond 

    document.getElementById("clock").innerText=myClock;
}