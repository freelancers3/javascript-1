let age = 18;
/*
if (age > 20) {
  console.log("Enter Calssroom 1"); // age > 20 : false
} else if (age < 6) {
  console.log("Go to your mama"); // age < 6 : false
} else if (age < 15) {
  console.log("Enter Classroom x"); // age < 15 : false
} else {
  console.log("Enter Calssroom 2");
}*/

/**
 * اكتب برنامج جافا سكريبت يستخدم عبارات if , else if , else 
 * لتحديد هل الساعة الحالية صباحا "ص" أو مساءا "م" حسب الساعة الحالية
 * استخدم نظام ٢٤ ساعة 
 * 
 * let hour = --- ;
 * let amOrPm ;
 * 
 * if(condition){
 * amOrPm = "AM";
 * }elseif(condition){
 * // your code 
 * }else(condition){
 * // your code
 * }
 * 
 * console.log("It's currently " + amOrPm);
 */


// prompt(message, default)

// let name = prompt("Enetr your name: ", "Mohammed");
// console.log("Hello " + name);

// Get the hour 
let hour = prompt("Enetr your current hour: ", 22);

// declare amOrPm variable to hold "AM" or "PM":
let amOrPm;

if (hour >= 0 && hour < 12) {
    amOrPm = "AM"
} else if (hour >= 12 && hour < 24) {
    amOrPm = "PM";
} else { 
    amOrPm = "invalid hour";
}

// print the result
console.log("it's currently " + amOrPm);




