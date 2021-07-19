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
        if (dayIndex == 1 && gender == "male"){
          alert("You were born on " +week_Days[0] + " and Your akan name is " +mNames[0]+"!");
        }
        else if(dayIndex == 2 && gender == "male"){
          alert("You were born on "+week_Days[1] + " and Your akan name is " +mNames[1]+"!");
        }
        else if(dayIndex == 3 && gender == "male"){
          alert("You were born on " +week_Days[2]+ " and Your akan name is " +mNames[2]+"!");
        }
        else if(dayIndex == 4 && gender == "male"){
          alert("You were born on "+week_Days[3] +  " and Your akan name is " +mNames[3]+"!");
        }
        else if(dayIndex == 5 && gender == "male"){
          alert("You were born on "+week_Days[4] +  " and Your akan name is " +mNames[4]+"!");
        }
        else if(dayIndex == 6 && gender == "male"){
          alert("You were born on "+week_Days[5] +  " and Your akan name is " +mNames[5]+"!");
        }
        else if(dayIndex == 0 && gender == "male"){
          alert("You were born on "+week_Days[6] + " and Your akan name is " +mNames[6]+"!");
        }
        else if (dayIndex == 1 && gender == "female"){
          alert("You were born on "+week_Days[0] + " and Your akan name is  " +fNames[0]+"!");
        }
        else if(dayIndex == 2 && gender == "female"){
          alert("You were born on " +week_Days[1] + " and Your akan name is " +fNames[1]+"!");
        }
        else if(dayIndex== 3 && gender == "female"){
          alert("You were born on " +week_Days[2] + " and Your akan name is " +fNames[2]+"!");
        }
        else if(dayIndex == 4 && gender == "female"){
          alert("You were born on " +week_Days[3] + " and Your akan name is " +fNames[3]+"!");
        }
        else if(dayIndex == 5 && gender == "female"){
          alert("You were born on " +week_Days[4] + " and Your akan name is " +fNames[4]+"!");
        }
        else if(dayIndex == 6 && gender == "female"){
          alert("You were born on " +week_Days[5] + " and Your akan name is " + fNames[5]+"!");
        }else if(dayIndex == 0 && gender == "female"){
          alert("You were born on " +week_Days[6] + " and Your akan name is " +fNames[6]+"!") 
        }
        else{
          alert("check your dates")
        }
    }
