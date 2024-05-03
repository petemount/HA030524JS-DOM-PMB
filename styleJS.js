let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let header1 = document.getElementById("header1");
let button3 = document.getElementById("btn3");
let imagefile = document.getElementById("bild");
let plus = document.getElementById("btn4");
let minus = document.getElementById("btn5");

button1.onclick = function () {
  header1.style.color = "red";
  header1.style.backgroundColor = "white";
};

button2.onclick = function () {
  header1.style.cssText = "background-color: yellow";
};

button3.onclick = function () {
  if (imagefile.style.display === "none") {
    imagefile.style.display = "block";
  } else {
    imagefile.style.display = "none";
  }
};
