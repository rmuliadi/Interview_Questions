var string = "result";
var delay1 = 50; // Interval 1 (in Milliseconds)
var delay2 = 100; // Interval 2 (in Milliseconds)
var prevTime = 0; // Previous Time
var curTime = 0; // Current Time
var deltaTime = 0; // The difference of time


// asynchronous code
function printOutResult () {
	timer = setInterval(console.log(string), delay1, delay2);
	clearInterval(timer);
	return timer;
}




// Promise function to resolve the result string
var myPromise = new Promise(function(resolve, reject) {
		resolve(printOutResult());
})
