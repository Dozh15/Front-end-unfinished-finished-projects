$(window).scroll(function() {
  var scrollTop= $(window).scrollTop(),
      b1= $('#button-bar-left'),
      b2= $('#image-obj-1'),
     min= b1.position().top,
     max= (b1.position().top + b1.outerHeight()) - b2.outerHeight();

  b2.css({
    top: Math.min(Math.max(scrollTop,min),max) - scrollTop
  });
});


$(window).scroll(function() {
  var scrollTop= $(window).scrollTop(),
      b1= $('#button-bar-left-2'),
      b2= $('#image-obj-2'),
     min= b1.position().top,
     max= (b1.position().top + b1.outerHeight()) - b2.outerHeight();

  b2.css({
    top: Math.min(Math.max(scrollTop,min),max) - scrollTop
  });
});


/*
window.uclicked =function example() {
    var color = document.getElementByClassName("button").style.color;
    if (color === "#FA5F5B")
         document.getElementByClassName("button").style.color="black";
    else
         document.getElementByClassName("button").style.color="#FA5F5B";
}


// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;    
}
 
// Function to add event listener to table
var el = document.getElementById("install-type-left");
el.addEventListener("click", function(){sayS()}, false);

function sayS() {
    // body...
    console.log("hi");
}
*/



function optClicked() {
    // body...
    console.log("aindias");
}


var able = false;


function installTypeLeft(){
    document.getElementById('install-type-left').style.backgroundColor = "red";
    document.getElementById('install-type-right').style.backgroundColor = "#FA5F5B";
    disableBUTS();
}


function disableBUTS()
{
    console.log("disableBUTS");
    document.getElementById("v-o-b-l-b-button").style.backgroundColor = "grey";
    document.getElementById("v-o-b-r-b-button").style.backgroundColor = "grey";

    document.getElementById("energy-option-mid-left").style.backgroundColor = "grey";
    document.getElementById("energy-option-mid-right").style.backgroundColor = "grey";

    document.getElementById("energy-option-bot-left").style.backgroundColor = "grey";
    document.getElementById("energy-option-bot-right").style.backgroundColor = "grey";

    able = false;

    cursorDisable();
}




function installTypeRight(){
    document.getElementById('install-type-right').style.backgroundColor = "red";
    document.getElementById('install-type-left').style.backgroundColor = "#FA5F5B";
    enableBUTS();
}

function enableBUTS()
{
    console.log("enableBUTS");
    document.getElementById("v-o-b-l-b-button").style.backgroundColor = "#FA5F5B";
    document.getElementById("v-o-b-r-b-button").style.backgroundColor = "#FA5F5B";

    document.getElementById("energy-option-mid-left").style.backgroundColor = "#FA5F5B";
    document.getElementById("energy-option-mid-right").style.backgroundColor = "#FA5F5B";

    document.getElementById("energy-option-bot-left").style.backgroundColor = "#FA5F5B";
    document.getElementById("energy-option-bot-right").style.backgroundColor = "#FA5F5B";

    able = true;

    cursorEnable();
}




function vnfOptionLeftTop(){
    // body...
    console.log("1");
}



function vnfOptionLeftBot(){
    if(able==true){
    console.log("2");
}
    else
    {
        console.log("DISABLE");
    }
}
function vnfOptionRightBot(){
    if(able==true)
    {
        console.log("2");
    }
    else
    {
        console.log("DIS");
    }
   
}




function check()
{
    console.log("check");
}


function cursorEnable()
{
  console.log("eik tu nx");
  document.getElementById('v-o-b-l-b-button').style.cursor = "default";
  document.getElementById('v-o-b-r-b-button').style.cursor = "default";

  document.getElementById('energy-option-mid-left').style.cursor = "default";
  document.getElementById('energy-option-mid-right').style.cursor = "default";
  document.getElementById('energy-option-bot-left').style.cursor = "default";
  document.getElementById('energy-option-bot-right').style.cursor = "default";

}

function cursorDisable()
{
  console.log("eik tu nx-2");
  document.getElementById('v-o-b-l-b-button').style.cursor = "not-allowed";
  document.getElementById('v-o-b-r-b-button').style.cursor = "not-allowed";

  document.getElementById('energy-option-mid-left').style.cursor = "not-allowed";
  document.getElementById('energy-option-mid-right').style.cursor = "not-allowed";
  document.getElementById('energy-option-bot-left').style.cursor = "not-allowed";
  document.getElementById('energy-option-bot-right').style.cursor = "not-allowed";

}


function heater1()
{
  console.log("heater 1");
  heater1On();

}

function heater1On()
{
  document.getElementById("heater-1").style.backgroundColor = "red";
  document.getElementById("heater-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("heater-3").style.backgroundColor = "#FA5F5B";

}

function heater2()
{
  console.log("heater 2");
  heater2On();
}

function heater2On()
{
  document.getElementById("heater-2").style.backgroundColor = "red";
  document.getElementById("heater-1").style.backgroundColor = "#FA5F5B";
  document.getElementById("heater-3").style.backgroundColor = "#FA5F5B";

}

function heater3()
{
  console.log("heater 3");
  heater3On();
}

function heater3On()
{
  document.getElementById("heater-3").style.backgroundColor = "red";
  document.getElementById("heater-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("heater-1").style.backgroundColor = "#FA5F5B";

}

var dheaterRightToTurnOnRight = false;


function dheaterRightToTurnOnTrue()
{
  return dheaterRightToTurnOnRight = true;
}

function dheaterRightToTurnOnFalse()
{
  return dheaterRightToTurnOnRight = false;
}


function cooler1()
{
  console.log("cooler 1");
  cooler1On();
  //dheaterDisabling();
  dheaterDisable();
  dheaterRightToTurnOnFalse();


}

function cooler1On()
{
  document.getElementById("cooler-1").style.backgroundColor = "red";
  document.getElementById("cooler-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("cooler-3").style.backgroundColor = "#FA5F5B";
}

function cooler2()
{
  console.log("cooler 2");
  cooler2On();
  //dheaterAbling();
  dheaterEnable();
  dheaterRightToTurnOnTrue();

}

function cooler2On()
{
  document.getElementById("cooler-2").style.backgroundColor = "red";
  document.getElementById("cooler-1").style.backgroundColor = "#FA5F5B";
  document.getElementById("cooler-3").style.backgroundColor = "#FA5F5B";
}

function cooler3()
{
  console.log("cooler 3");
  cooler3On();
  //dheaterAbling();
  dheaterEnable();
  dheaterRightToTurnOnTrue();

}

function cooler3On()
{
  document.getElementById("cooler-3").style.backgroundColor = "red";
  document.getElementById("cooler-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("cooler-1").style.backgroundColor = "#FA5F5B";
}



function dheater1()
{
  console.log("d heater 1");
 
if(dheaterRightToTurnOnRight==true){
  dheater1On();
}else
{
  console.log("dheater1 method prob || dh turn off");
}
}

function dheater1On()
{
  document.getElementById("d-heater-1").style.backgroundColor = "red";
  document.getElementById("d-heater-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("d-heater-3").style.backgroundColor = "#FA5F5B";
}

function dheater2()
{
  console.log("d heater 1");
  

  if(dheaterRightToTurnOnRight==true){
    dheater2On();
}else
{
  console.log("dheater2 method prob || dh turn off");
}
}

function dheater2On()
{
  document.getElementById("d-heater-2").style.backgroundColor = "red";
  document.getElementById("d-heater-1").style.backgroundColor = "#FA5F5B";
  document.getElementById("d-heater-3").style.backgroundColor = "#FA5F5B";
}

function dheater3()
{
  console.log("d heater 1");
  
    if(dheaterRightToTurnOnRight==true){
    dheater3On();
}else
{
  console.log("dheater3 method prob || dh turn off");
}

}
function dheater3On()
{
  document.getElementById("d-heater-3").style.backgroundColor = "red";
  document.getElementById("d-heater-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("d-heater-1").style.backgroundColor = "#FA5F5B";
}

function dheaterEnable()
{
  document.getElementById("d-heater-1").style.cursor = "default";
  document.getElementById("d-heater-2").style.cursor = "default";
  document.getElementById("d-heater-3").style.cursor = "default";

  document.getElementById("d-heater-1").style.backgroundColor = "#FA5F5B";
  document.getElementById("d-heater-2").style.backgroundColor = "#FA5F5B";
  document.getElementById("d-heater-3").style.backgroundColor = "#FA5F5B";
}

function dheaterDisable()
{
    document.getElementById("d-heater-1").style.cursor = "not-allowed";
    document.getElementById("d-heater-2").style.cursor = "not-allowed";
    document.getElementById("d-heater-3").style.cursor = "not-allowed";

    document.getElementById("d-heater-1").style.backgroundColor = "grey";
    document.getElementById("d-heater-2").style.backgroundColor = "grey";
    document.getElementById("d-heater-3").style.backgroundColor = "grey";

}