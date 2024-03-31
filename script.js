let header=document.querySelectorAll(".header");
let navbar=document.querySelectorAll(".navbar");
let section=document.querySelectorAll(".section");
let home=document.querySelectorAll(".home");
let homeContent=document.querySelectorAll(".home-content");
let about=document.querySelectorAll(".about");
let aboutContent=document.querySelectorAll(".about-content");
let skill=document.querySelectorAll(".skill");
let skillContent=document.querySelectorAll(".skill-content");
let project=document.querySelectorAll(".project");
let projectContent=document.querySelectorAll(".project-content");
let contact=document.querySelectorAll(".contact");
let inputbox=document.querySelectorAll(".input-box");
let form=document.querySelectorAll(".form");



const msg = document.getElementById("#msg");

function data (){

var a=document.getElementById("#n1").value;
var b=document.getElementById("#n2").value;
var c=document.getElementById("#n3").value;

if(a=="" || b=="" || c=="")
{
    alert('all fields are mandatery')
    return false;
}
    else{
        true;
    }
}
