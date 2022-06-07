var slider1 = document.getElementById("forRange");
var output1 = document.getElementById("forValue");

var pontDisp = document.getElementById("pontDisponivel");
pontDisp.value = 0
pontDisp.innerHTML = pontDisp.value

output1.innerHTML = slider1.value + "pts";

slider1.oninput = function () {
    output1.innerHTML = this.value + " pts";
    pontDisp.innerHTML = pontDisp.value
    
}



//-------------------------------------------------------

var slider2 = document.getElementById("desRange");
var output2 = document.getElementById("desValue");

output2.innerHTML = slider2.value + " pts";

slider2.oninput = function () {
    output2.innerHTML = this.value + " pts";
}

slider2.addEventListener("mousemove", function () {
    var x = slider2.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider2.style.background = color;


})



//-------------------------------------------------------

var slider3 = document.getElementById("sabRange");
var output3 = document.getElementById("sabValue");

output3.innerHTML = slider3.value + " pts";

slider3.oninput = function () {
    output3.innerHTML = this.value + " pts";
}

slider3.addEventListener("mousemove", function () {
    var x = slider3.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider3.style.background = color;


})

//-------------------------------------------------------

var slider4 = document.getElementById("inteRange");
var output4 = document.getElementById("inteValue");

output4.innerHTML = slider4.value + " pts";

slider4.oninput = function () {
    output4.innerHTML = this.value + " pts";
}

slider4.addEventListener("mousemove", function () {
    var x = slider4.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider4.style.background = color;


})

//-------------------------------------------------------

var slider5 = document.getElementById("carRange");
var output5 = document.getElementById("carValue");

output5.innerHTML = slider5.value + " pts";

slider5.oninput = function () {
    output5.innerHTML = this.value + " pts";
}

slider5.addEventListener("mousemove", function () {
    var x = slider5.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider5.style.background = color;


})

//-------------------------------------------------------

var slider6 = document.getElementById("conRange");
var output6 = document.getElementById("conValue");

output6.innerHTML = slider6.value + " pts";

slider6.oninput = function () {
    output6.innerHTML = this.value + " pts";
}

slider6.addEventListener("mousemove", function () {
    var x = slider6.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider6.style.background = color;


})

//-------------------------------------------------------

var slider7 = document.getElementById("perRange");
var output7 = document.getElementById("perValue");

output7.innerHTML = slider7.value + " pts";

slider7.oninput = function () {
    output7.innerHTML = this.value + " pts";
}

slider7.addEventListener("mousemove", function () {
    var x = slider7.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider7.style.background = color;


})

//-------------------------------------------------------

var slider8 = document.getElementById("sorRange");
var output8 = document.getElementById("sorValue");

output8.innerHTML = slider8.value + " pts";

slider8.oninput = function () {
    output8.innerHTML = this.value + " pts";
}

slider8.addEventListener("mousemove", function () {
    var x = slider8.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider8.style.background = color;


})

//-------------------------------------------------------

var slider9 = document.getElementById("agiRange");
var output9 = document.getElementById("agiValue");

output9.innerHTML = slider9.value + " pts";

slider9.oninput = function () {
    output9.innerHTML = this.value + " pts";
}

slider9.addEventListener("mousemove", function () {
    var x = slider9.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider9.style.background = color;


})

//-------------------------------------------------------

var slider10 = document.getElementById("intuRange");
var output10 = document.getElementById("intuValue");

output10.innerHTML = slider10.value + " pts";

slider10.oninput = function () {
    output10.innerHTML = this.value + " pts";
}

slider10.addEventListener("mousemove", function () {
    var x = slider10.value;

    var color = `linear-gradient(90deg, rgb(47,25,95) ${x * 5}%, rgb(202, 178, 232) ${x * 5}%)`;
    slider10.style.background = color;


})