var week_Days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
var mNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var fNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
function calculateDayIndex(){
    year = document.getElementById("year").value;
    CC = parseInt(year.slice(0,2));
    YY = parseInt(year.slice(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value)
    d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    console.log(d);
  return (Math.floor(d));
}
function getGender(){
    if(document.getElementById('male').checked){
       var gender="male"
    }
    else if(document.getElementById('female').checked){
       var gender="female"
  }
  return gender;
}
function outputName(){ 
  var dayIndex = calculateDayIndex();
  var gender = getGender();   
