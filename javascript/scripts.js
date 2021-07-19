var week_Days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
var mNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var fNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
function calculateDayIndex(){
    year = document.getElementById("year").value;
    CC = parseInt(year.slice(0,2));
    YY = parseInt(year.slice(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value)
