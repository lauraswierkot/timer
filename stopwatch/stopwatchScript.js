var seconds = 0;
var miliseconds = 0;
var addmiliseconds = document.getElementById('miliseconds');
var addSeconds = document.getElementById('seconds');

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var interval; //to store timer values

function startTimer()
{ 
	miliseconds++;
	if (miliseconds < 9)
	{
		addmiliseconds.innerHTML = '0' + miliseconds;
	}
	if (miliseconds > 9) 
	{
		addmiliseconds.innerHTML = miliseconds;
	}
	if (miliseconds > 99) 
	{
		seconds++;
		addSeconds.innerHTML = '0' + seconds;
		miliseconds = 0;
		addmiliseconds.innerHTML = '0' + 0;
	}
	if (seconds > 9) 
	{
		addSeconds.innerHTML = seconds;
	}	
}

start.onclick = function()
{
	interval = setInterval(startTimer, 10);
	document.getElementById('start').disabled = true;
}

stop.onclick = function()
{
	clearInterval(interval);
	document.getElementById('start').disabled = false;
}

reset.onclick = function()
{
	clearInterval(interval);
	miliseconds = '00';
	seconds = '00';
	addSeconds.innerHTML = seconds;
	addmiliseconds.innerHTML = miliseconds;
	document.getElementById('start').disabled = false;
}