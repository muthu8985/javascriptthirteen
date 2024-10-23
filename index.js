let months;
switch (new Date().getMonth()) {
  case 0:
    months = "January";
    break;
  case 1:
    months = "Feburary";
    break;
  case 2:
    months = "March";
    break;
  case 3:
    months = "April";
    break;
  case 4:
    months = "May";
    break;
  case 5:
    months = "June";
    break;
  case 6:
    months = "July";
    break;
  case 7:
    months = "August";
    break;
  case 8:
    months = "September";
    break;
  case 9:
    months = "October";
    break;
  case 10:
    months = "November";
    break;
  case 11:
    months = "December";
    break;
  default:
    months = "not valid";
}
console.log(months);
//  phno verifier
let phno = "12345678903";

let len = phno.length;
let text;
if (len > 10) {
  text = " please verify your number ,more than 10 characters";
} else if (len < 10) {
  text = " please verify your number,less than 10 characters";
} else {
  text = " continue";
}
document.write(text);
// for  of loops
const cars = ["BMW", "Volvo", "Mini"];
let txt = "";
for (let x of cars) {
  txt += x + "<br>";
}
document.write(txt)


// while loops 
tea="";
let i=0;
 while(i<10){
tea +="<br> The Number is "+ i;

 i++;
 }
 document.write(tea)