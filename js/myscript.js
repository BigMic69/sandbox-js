/*var yourName = prompt("What is you name?");

if (yourName != null) {
  document.getElementById("sayHello").innerHTML = "Hello " + yourName;
} else {
  alert("Pleas enter a name next time");
}*/


// SECTION START
/*document.write("5 + 4 = ", 5 + 4, "<br />");
document.write("5 - 4 = ", 5 - 4, "<br />");
document.write("5 * 4 = ", 5 * 4, "<br />");
document.write("5 / 4 = ", 5 / 4, "<br />");
document.write("5 % 4 = ", 5 % 4, "<br />");

var balance = 587.77;
document.write("Yearly Amount : ", (balance * 12).toFixed(2), "<br />");

var randStr = "A long " + "string that " + "goes on and on";

document.write(randStr.replace("and on", "forever, like MCCGraphics") + "<br />");*/

// SECTION START
/*var age = 8;
if((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten" + "<br />");
} else if (age > 18) {
  document.write("Go to College" + "<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}*/


// SECTION START
function openAlert(mess) {
    alert(mess);
}


document.getElementById('newPic').onclick = function(event) {
    document.getElementById('newPic').src = "img/bike-1.jpg";
}
document.getElementById('newPic').onmouseover = function(event) {
    document.getElementById('newPic').style.boxShadow = "4px 4px 10px #333";
}
document.getElementById('newPic').onmouseenter = function(event) {
    document.getElementById('newPic').style.borderStyle = "solid";
}
document.getElementById('newPic').onmouseenter = function(event) {
    document.getElementById('newPic').style.borderWidth = "thick";
}
document.getElementById('newPic').onmouseclick = function(event) {
    document.getElementById('newPic').style.borderColor = "9f0c0c";
}

document.getElementById('myH2').onmouseover = function(event) {
    document.getElementById('myH2').style.backgroundColor = "#333";
}
document.getElementById('myH2').onmouseout = function(event) {
    document.getElementById('myH2').style.color = "#9f0c0c";
}


$("p").on("mouseover", function() {
    $(this).css("backgroundColor", "#555"),
});
