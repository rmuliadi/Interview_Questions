/* To secure the HTTP cookies against the XSS attacks is by taking a proper precautions to protect your users and systems from cross-site scripting (XSS) and Cross Site Request Forgery (CSRF).
 To secure the cookies against XSS attacks are as follows:
 1. Don't include JavaScript from untrusted domains. The Content Distribution Network (CDN) of large companies such as Yahoo!, Google, and Facebook should be safe; 
 use extreme cautions when including from other locations.
 2. Filter out the HTML from all user input or otherwise sanitize the input. Never accept user input and output onto a page without some sort of filtering.
 Use SSL connections for the browser to send the cookies so that the cookies will not be available to any insecure sites and accidentally sent as a cleartext.
 3. Implement HTTP-only for standard cookie implementation so that a malicious script wouldn't need be able to access that cookie via document.cookie 
 and therfore would not be able to steal your cookies. 
 To secure the cookies against CSRF attacks are  as follows: 
 1. Require confirmation for any sensitive action. The page that the person opens should display a confirmation page that requires him/her to validate the action being requested. 
 The validation may include another login screen for extra security.
 2. Cookies that validate users in systems with sensitive data should have a short expiration time. 
 3. Require validation not just with cookies, but also by referrer and/or request type (POST instead of GET) */
/* The code to set the flags on the HTTP header manually is as follows: 
The code can be done in PHP to set the argument for cookies using "setcookie" function like below:
setcookie( name, value, expire, path, domain, secure, httponly);
// open
setcookie( 'Username', 'Bob', 0, '/', '.example', false, false);
// locked down
setcookie( "Username', 'Bob', 0, '/forums', 'www.example.com', isset($_SERVER["HTTPS"]), true);
To  change the cookie values for the session cookie require the "session_set_cookie_params" function, which needs to be called before the session is started.
session_set_cookie_params($expire, $path, $domain, $secure, true);
// open
session_set_cookie_params(0, '/forums', 'www.example.com', isset($_SERVER["HTTPS"]), true); */
/* The package to prevent this by inputting Javascript code as follows:
// Use the browser's built-in functionality to quickly and safely escape the string
function escapehtml(str) {
	var div = document.createElement('div');
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
}

//UNSAFE with unsafe strings; only use on previously-escaped ones!
function unescaphtml(escapedStr) {
	var div = document.createElement('div');
	div.innerHTML = escapedStr;
	var child = div.childNodes[0];
	return child ? child.nodeValue :'';
}
*/
