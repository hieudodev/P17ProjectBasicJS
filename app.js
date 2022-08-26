var h = null;
var m = null;
var s = null;
var timeout = null;

window.onload = function  showTime() 
{
   
    var date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    var session = "AM";
    if(h === 0)
    {
        h = 12;
    }
    if(h > 12)
    {
        h = h - 12;
        session = "PM";
    }
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
    timeout = setTimeout(showTime
    ,1000);
}
showTime();