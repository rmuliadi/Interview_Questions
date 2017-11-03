var testString = "hello";
var ulangString = "";

function ulangkata(integer) {
	for (var i = 0; i < integer; i++)
		ulangString = ulangString + testString;
	
	return ulangString;
}

var integer = 4;
console.log(ulangkata(integer));