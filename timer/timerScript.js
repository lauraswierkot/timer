var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
 
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var interval;

function startCountdown()
{  
	var minutesValue = minutesInput.value;
	var secondsValue = secondsInput.value;
	
	if(secondsValue != 0)
	{
	secondsValue--;
	}
	
	if(secondsValue == 0 && minutesValue > 0)
	{
		secondsValue = 59;
		minutesValue--;
	}
	else if(minutesValue == 0 && secondsValue == 0)
	{
		clearInterval(interval);
	}
	if(secondsValue < 0)
	{
		secondsValue = 0;
	}
	if(minutesValue < 0)
	{
		minutesValue = 0;
	}
	if(secondsValue > 60 || minutesValue > 60 )
	{
		alert("Value has to be smaller than 60");
		document.getElementById('start').disabled = true;
		minutesValue = 0;
		secondsValue = 0;
		document.getElementById('start').disabled = false;
	}
	if(minutesValue < 0 || secondsValue < 0)
	{
		alert("Value has to be bigger than 0");
		document.getElementById('start').disabled = true;
		minutesValue = 0;
		secondsValue = 0;
		document.getElementById('start').disabled = false;
	}
	minutesInput.value = minutesValue;
	secondsInput.value = secondsValue;
}

start.onclick = function()
{
	interval = setInterval(startCountdown, 1000);
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
	minutesInput.value = 0;
	secondsInput.value = 0;
	document.getElementById('start').disabled = false;
}