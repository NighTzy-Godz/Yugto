var btn1 = document.querySelector(".clik1");
var btn2 = document.querySelector(".clik2");
var btn3 = document.querySelector(".clik3");
var btn4 = document.querySelector(".clik4");
var btn5 = document.querySelector(".clik5");
var btn6 = document.querySelector(".clik6");
var btn7 = document.querySelector(".clik7");

var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var c3 = document.querySelector(".c3");
var c4 = document.querySelector(".c4");
var c5 = document.querySelector(".c5");
var c6 = document.querySelector(".c6");
var c7 = document.querySelector(".c7");

var content = document.querySelector(".left-content");
var hide = document.querySelector(".bioContent");
var josh = document.querySelector(".joshs");

btn1.addEventListener("click", function () {
  c1.classList.toggle("joshs");
  hide.classList.toggle("hide");
});

btn2.addEventListener("click", function () {
  c2.classList.toggle("rachels");
  hide.classList.toggle("hide");
});

btn3.addEventListener("click", function () {
  c3.classList.toggle("aivans");
  hide.classList.toggle("hide");
});

btn4.addEventListener("click", function () {
  c4.classList.toggle("jadens");
  hide.classList.toggle("hide");
});

btn5.addEventListener("click", function () {
  c5.classList.toggle("tim");
  hide.classList.toggle("hide");
});

btn6.addEventListener("click", function () {
  c6.classList.toggle("ians");
  hide.classList.toggle("hide");
});

btn7.addEventListener("click", function () {
  c7.classList.toggle("asers");
  hide.classList.toggle("hide");
});
