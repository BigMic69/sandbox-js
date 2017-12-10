// HELLO BUTTON SECTION

var bod1 = document.getElementById('wrapMain');
var btn1 = document.getElementById('myBtn');

bod1.style.backgroundColor = '#333';
btn1.style.color = '#fff';
btn1.style.fontSize = '2em';
btn1.style.fontFamily = 'Ubuntu';
btn1.addEventListener('click', putText);

function putText() {
    document.getElementById('sayHello').innerHTML = '>' + ' What up doe???';
}



// HELLO LINKS SECTION ==========
var colorLinks = document.getElementById('aLinks');
var link1 = colorLinks.getElementsByTagName('a');
colorLinks.style.backgroundColor = '#888';
colorLinks.style.border = '1px solid #f8f8f8';
colorLinks.style.marginBottom = '80px';
for (var i = 0; i < link1.length; i++) {
    link1[i].style.color = '#fff';
    link1[i].style.backgroundColor = '#333';
    link1[i].style.boxShadow = '1px 1px #f21515';
    link1[i].style.padding = '10px';
}

link1[0].addEventListener('mouseenter', chgLink1);
link1[1].addEventListener('mouseenter', chgLink2);
link1[2].addEventListener('mouseenter', chgLink3);

function chgLink1() {
    link1[0].innerHTML = '> "HELLO!!!"';
    link1[0].style.backgroundColor = '#f4f4f4';
    link1[0].style.color = '#333';
}

function chgLink2() {
    link1[1].innerHTML = '> "Ok-a-y!!!"';
    link1[1].style.backgroundColor = '#f4f4f4';
    link1[1].style.color = '#333';
}

function chgLink3() {
    link1[2].innerHTML = '> "THIS HAS NOW CHANGED..."';
    link1[2].style.backgroundColor = '#f4f4f4';
    link1[2].style.color = '#333';
}



// JUMBOTRON SECTION ==========
var jumbotron = document.getElementsByClassName('jumbotron');
var txtContainer = document.getElementById('textContainer');
var myTitle = document.getElementById('myH2');

txtContainer.addEventListener('mouseenter', bgChange1);
txtContainer.addEventListener('mouseleave', bgChange2);

function bgChange1() {
    txtContainer.style.backgroundColor = 'rgba(33, 33, 33, .9)';
    txtContainer.style.color = '#f2f2f2';
    txtContainer.style.textShadow = '1px 1px red';
    txtContainer.style.border = '1px solid red';
    txtContainer.style.fontSize = '1.5em';
}

function bgChange2() {
    txtContainer.style.backgroundColor = 'rgba(33, 33, 33, .4)';
    txtContainer.style.borderRadius = '20px';
}



// SMALL TOGGLE PIC WITH BUTTON ==========
var logoButton = document.getElementById('logoButton').addEventListener('click', picFlip);

function picFlip() {
    // var mixPic = document.getElementsByTagName('img');
    var x = document.getElementById('protoPic');
    x.classList.toggle('hide');
    // if (x.className === 'protoPic') {
    //     x.className = 'hide';
    // } else {
    //     x.className = 'protoPic';
    // }

}


// BOX SECTION ==========
// var bSec = document.getElementById('boxSection'),
//     resultP = document.getElementById('results1'),
//     btnDrop = document.getElementById('btnDrop').addEventListener('click', shoGrid);
//
// function shoGrid() {
//     bSec.classList.toggle('hide-content');
// }
// resultP.innerHTML = bSec;
// console.log(bSec);

$(function() {
    $('#btnDrop').click(function() {
        $('.box').slideToggle(1000);
    });
    $('.content').hover(function() {
        $('.vision-box').fadeToggle(1000);
    });
});


// var headerTitle = document.getElementById('myH2');
// console.log(headerTitle);
// headerTitle.style.fontSize = '1.5em';


// aTags.style.color = 'red';
// for (var i = 0; i < aTags.length; i++) {
//     aTags[i].style.color = 'red';
// }

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
/*function openAlert(mess) {
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
*/

// $(document).ready(function() {
//     $(".text-container").on("mouseenter", function() {
//         $(this).toggleClass('textChg');
//     });
//
//     $('#logoButton').click(function() {
//         /*var div =$('.newPicWrap');
//         div.animate({left: '100px'}, "slow");
//         div.animate({width: '50%'}, "slow");*/
//         $('.newPicWrap').toggleClass('newPicChg');
//             //width: '50%'
//         //});
//     });
//
// })
