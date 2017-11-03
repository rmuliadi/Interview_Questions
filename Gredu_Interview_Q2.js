/*Answer to the Question 2 */
var testString = "akkkkkkkkkkkkkkkkkkkkkkka";


function reverseString(string) {
	return string.split("").reverse().join("");
}



/* Function to determine whether a string is a palindrome or not */
function isPalindrome(boolean) {
	if (testString == reverseString(testString))
		return console.log(true);
	else
		return console.log(false);
}

isPalindrome(testString);


