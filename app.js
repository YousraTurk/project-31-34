// Write a program that displays current date and time in 
// your browser.

// var date  = new Date();
// document.write(date);


// Write a program that alerts the current month in words. 
// For example December.

// var m = ["Jan","Feb","March","April","May","June","July","August","Sep"," Oct","Nov","Dec"]
// var a = new Date();
// var mon = a.getMonth();
// var thisMonth = m[mon];
// document.write(" Current Month : "+thisMonth);

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
// var days  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var a = new Date();
// var day = a.getDay();
// var thisDay = days[day];
// var amount = thisDay.length;
// if(amount>3){
//    var  monthAbbr = thisDay.slice(0,3);

// }
// document.write(" Today is  "+monthAbbr);

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
// var days  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var a = new Date();
// var b = a.getDay();
// var day = days[b];

// if(day === ("Saturday"||"Sunday")){
//     document.write(day + " It's Fun Day ");

// }
// else{
//     document.write(day+"it's working day  ");
// }


// Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var d = new Date();
// var days = d.getDate();
// if(days<16){
//     document.write("First fifteen days of the month");

// }
// if(days>16){
//     document.write("Last days of the month");

// }

// Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

var d = new Date();
var min = d.getMilliseconds();
document.write(min)