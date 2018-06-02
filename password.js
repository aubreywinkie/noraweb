function myFunction() {
var password;
var pass1="091417"
	password=prompt('Enter Password to View Porfolio', ' ');
	if (password==pass1) {
		alert("Correct password, click OK to enter.");
		window.location="portfolio.html";
	}
	else {
		alert("Incorrect password");
	}
	document.getElementById("demo").innerHTML = txt;
}