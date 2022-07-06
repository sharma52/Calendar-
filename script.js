let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

function flip() {
    cardElement.classList.toggle("flipped")
}

function startTime() {
    
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML = d;
    document.getElementById('day').innerHTML = wd;
    document.getElementById('month').innerHTML = mt + "/" + y;
    document.getElementById("time").innerHTML=time;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
