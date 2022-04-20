let startingNum = 20;

let num = document.getElementsByClassName("num");
let feetLen = document.getElementById("length-in-feet");
let meterLen = document.getElementById("length-in-meters");
let galVol = document.getElementById("volume-in-gallons");
let litersVol = document.getElementById("volume-in-liters");
let kiloMass = document.getElementById("mass-in-kilograms");
let poundsMass = document.getElementById("mass-in-pounds");

for (let i = 0; i < num.length; i++) {
  num[i].innerText = startingNum;
}

function lengthConversion (){
    feetLen.textContent = (startingNum * 3.2808).toFixed(3);
    meterLen.textContent = (startingNum / 3.2808).toFixed(3);
}

lengthConversion();

function volumeConversion (){
    galVol.textContent = (startingNum * 3.7854).toFixed(3);
    litersVol.textContent = (startingNum / 3.7854).toFixed(3);
}

volumeConversion();

function massConversion (){
    kiloMass.textContent = (startingNum * 2.2046).toFixed(3);
    poundsMass.textContent = (startingNum / 2.2046).toFixed(3);
}

massConversion();