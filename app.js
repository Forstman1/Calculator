
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

var firstresult = 0;
var secondresult = 0;
var power = 10;
var signs = "";



Element1.addEventListener('click', function () {

	firstresult = 0;
	secondresult = 0;
	endresult = 0;
	final_result.innerHTML = 0;
	signs = "";
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

Element4.addEventListener('click', function () {
	signs = "/";
});

Element3.addEventListener('click', function () {
	signs = "%";
});

Element20.addEventListener('click', function () {

	if (signs == "+")
	{
		endresult = firstresult + secondresult;
	}
	else if (signs == "-")
	{
		endresult = firstresult - secondresult;
	}
	else if (signs == "x")
	{
		endresult = firstresult * secondresult;
	}
	else if (signs == "/")
	{
		endresult = firstresult / secondresult;
	}
	else if (signs == "%")
	{
		endresult = firstresult % secondresult;
	}
	final_result.innerHTML = endresult;
	firstresult = 0;
	secondresult = 0;
	endresult = 0;
	signs = "";
});

function makegrid(eachone)
{
	if (firstresult == 0)
	{
	 	final_result.innerHTML = eachone;
		firstresult += eachone;
	}
	else if (signs == "+" || signs == "-" || signs == "x" || signs == "%" || signs == "/")
	{
		if (secondresult == 0)
		{
			secondresult += eachone;
			final_result.innerHTML = secondresult;
		}
		else
		{
			secondresult = secondresult * power;
			secondresult += eachone;
			final_result.innerHTML = secondresult;
		}
	}
	else
	{
		signs = "";
		firstresult = firstresult * power;
		firstresult += eachone;
		final_result.innerHTML = firstresult;
	}
}

Element5.addEventListener('click', function () {
	makegrid(7);
});

Element6.addEventListener('click', function () {
	makegrid(8);
});

Element7.addEventListener('click', function () {
	makegrid(9);
});

Element9.addEventListener('click', function () {
	makegrid(4);
});

Element10.addEventListener('click', function () {
	makegrid(5);
});

Element11.addEventListener('click', function () {
	makegrid(6);
});


Element13.addEventListener('click', function () {
	makegrid(1);
});

Element14.addEventListener('click', function () {
	makegrid(2);
});

Element15.addEventListener('click', function () {
	makegrid(3);
});
