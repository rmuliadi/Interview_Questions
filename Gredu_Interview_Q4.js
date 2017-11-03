var string = "result";
var delay1 = 50; // Interval 1 (in Milliseconds)
var delay2 = 100; // Interval 2 (in Milliseconds)
var prevTime = 0; // Previous Time
var curTime = 0; // Current Time
var deltaTime = 0; // The difference of time

// Timing from 50 ms to 100 ms
function getTime () {
	prevTime = (new Date()).getTime();
	curTime = prevTime;
	return deltaTime = curTime - prevTime;

}


// asynchronous code
function printOutResult () {
	//var d = new Date.now();
	//var n = d.getMilliseconds();
	//if (n > delay1) {
	//	document.writeln(n);
	//	if (n < delay2) {
	//		documentwriteln(n);
			timer = setInterval(document.writeln(string), delay1, delay2);
	//	}
	//}
	clearInterval(timer);
	return timer;
}





var myPromise = new Promise(function(resolve, reject) {
	if ((deltaTime >  delay1) && (deltaTime < delay2)) 
		resolve(printOutResult());
	else
		reject(printOutResult());
})