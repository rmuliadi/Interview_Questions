/* Answer to the Question 1 */

var emptyArray = [1, 'Gredu', 2, 3, 'for', 4, 'school', 5, 'in', 6, 'Indonesia', 7, 8];
var evenonlyArray = []; /*Array filled with even number only*/
var numberonlyArray = []; /*Array filled with number only */

/* Function to erase odd number only */
function erase_odd_number(array) {
	for (var i = 0; i < emptyArray.length; i++) {
		if (emptyArray[i]%2 == 0) {
			evenonlyArray[i] = emptyArray[i];
			//evenonlyArray.splice(i);
		}
	}
;
return console.log(evenonlyArray);
}

/* Function to erase strings only */
function erase_strings(array) {
	for (var i = 0; i < emptyArray.length; i++) {
		if (isNaN(emptyArray[i]) == 0) {
			numberonlyArray[i] = emptyArray[i];
			//numberonlyArray.splice(i);
		}
	}

return console.log(numberonlyArray);
}

/* Printing the Results */
erase_odd_number(emptyArray);
erase_strings(emptyArray);

