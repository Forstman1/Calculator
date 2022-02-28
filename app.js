
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
var power = 10;
var signs = "";
var result = "";


Element1.addEventListener('click', function () {

	endresult = 0;
	final_result.innerHTML = 0;
});

Element16.addEventListener('click', function () {
	signs = "+";
});

Element8.addEventListener('click', function () {
    signs = "x";
});


Element12.addEventListener('click', function () {
	signs = "-";
});

Element20.addEventListener('click', function () {
	signs = "";
	final_result.innerHTML = endresult;
	endresult = 0;
});

Element5.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 7;
		endresult += 7;
	}
	else if (signs == "+")
	{
		endresult += 7;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 7;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 7;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 7;
		final_result.innerHTML = endresult;
	}
});

Element6.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 8;
		endresult += 8;
	}
	else if (signs == "+")
	{
		endresult += 8;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 8;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 8;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 8;
		final_result.innerHTML = endresult;
	}
});

Element7.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 9;
		endresult += 9;
	}
	else if (signs == "+")
	{
		endresult += 9;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 9;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 9;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 9;
		final_result.innerHTML = endresult;
	}
});

Element9.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 4;
		endresult += 4;
	}
	else if (signs == "+")
	{
		endresult += 4;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 4;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 4;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 4;
		final_result.innerHTML = endresult;
	}
});

Element10.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 5;
		endresult += 5;
	}
	else if (signs == "+")
	{
		endresult += 5;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 5;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 5;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 5;
		final_result.innerHTML = endresult;
	}
});

Element11.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 6;
		endresult += 6;
	}
	else if (signs == "+")
	{
		endresult += 6;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 6;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 6;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 6;
		final_result.innerHTML = endresult;
	}
});


Element13.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 1;
		endresult += 1;
	}
	else if (signs == "+")
	{
		endresult += 1;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 1;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 1;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 1;
		final_result.innerHTML = endresult;
	}
});

Element14.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 2;
		endresult += 2;
	}
	else if (signs == "+")
	{
		endresult += 2;
		signs = "";
	}
	else if (signs == "-")
	{
		endresult -= 2;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 2;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 2;
		final_result.innerHTML = endresult;
	}
});

Element15.addEventListener('click', function () {
	if (endresult == 0)
	{
	 	final_result.innerHTML = 3;
		endresult += 3;
	}
	else if (signs == "+")
	{
		endresult += 3;
		signs = "";
	}
	else if (signs == "+")
	{
		endresult += 3;
		signs = "";
	}
	else if (signs == "x")
	{
		endresult *= 3;
		signs = "";
	}
	else
	{
		signs = "";
		endresult = endresult * power;
		endresult += 3;
		final_result.innerHTML = endresult;
	}
});