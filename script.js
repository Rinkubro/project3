var hours = document.getElementById('hr');
var minute = document.getElementById('min');
var second = document.getElementById('sec');
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var hrot = 30*h+m/2;
    var mrot = 6*m;
    var srot = 6*s;

    hours.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;


}
setInterval(showTime,1000);