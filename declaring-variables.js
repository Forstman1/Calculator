


var final_result = document.querySelector('.final-result');

var Element1 = document.getElementById('Element-AC');

var Element2 = document.getElementById('Element-+/-');

var Element3 = document.getElementById('Element-%');

var Element4 = document.getElementById('Element-/');

var Element5 = document.getElementById('Element-7');

var Element6 = document.getElementById('Element-8');

var Element7 = document.getElementById('Element-9');

var Element8 = document.getElementById('Element-x');

var Element9 = document.getElementById('Element-4');

var Element10 = document.getElementById('Element-5');

var Element11 = document.getElementById('Element-6');

var Element12 = document.getElementById('Element--');

var Element13 = document.getElementById('Element-1');

var Element14 = document.getElementById('Element-2');

var Element15 = document.getElementById('Element-3');

var Element16 = document.getElementById('Element-+');

var Element17 = document.getElementById('Element-0');

var Element18 = document.getElementById('Element-00');

var Element19 = document.getElementById('Element-,');

var Element20 = document.getElementById('Element-=');

var endresult = 0;
var signs = "";

Element1.addEventListener('click', function () {

	endresult = 0;
	final_result.innerHTML = 0;
});

Element16.addEventListener('click', function () {
	signs = "+";
});

Element18.addEventListener('click', function () {
    signs = "x";
});


Element12.addEventListener('click', function () {
	signs = "-";
});