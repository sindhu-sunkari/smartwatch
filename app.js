var date = new Date();
var daysInWeek=["sunday","monday","tuesday","wednesday","<b>Thursday","<b>Friday","saturday"]
var day=date.getDay();
var today = daysInWeek[day];
var hours =date.getHours();
var times=hours%12;
var min =date.getMinutes();
var sec=date.getSeconds();
var ampm=hours<12 ? "AM" : "PM";
function homme()
{
    document.getElementById("per").innerText=today+"\n"+ times +":"+ min +":" +sec +ampm;                                                                              
}  
function msg()
{
    var wish=hours<12?"gm":(hours<15?"ga":"ge");
    document.getElementById("per").innerText=wish;
}  
function time()
{
    document.getElementById("per").innerText=times+":" +min +":" + sec +ampm;
}                                       

