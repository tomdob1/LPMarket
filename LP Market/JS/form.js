
//var selection = document.forms['payment']['payment'];
//var card = document.forms['payment']['card'];
//var label = document.getElementById("card");
var tBox = document.createElement("INPUT"); //creates an input element
label = document.createElement("label"); //creates a label element
var notAllowedArray = ['!','"','£','$','%','^','&','*','(','(','-','_','+','=','¬','`','|','<','>','?','@',':',';','/','?','.',',','#','~','0','1','2','3','4','5','6','7','8','9']; //array used to store symbols and numbers not allowed
var notAllowedSymArray = ['!','"','£','$','%','^','&','*','(','(','-','_','+','=','¬','`','|','<','>','?','@',':',';','?','.',',','#','~']; //array used to store symbols not allowed. Used for address
var notAllowedSymAlphArray = ['!','"','£','$','%','^','&','*','(','(','-','_','+','=','¬','`','|','<','>','?','@',':',';','?','.',',','#','~','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //array used to store symbols and alphabet not allowed
var symbol = ['+','-','x']; /*did not include divide as it could be too complex for the user*/
var min = 1;   // https://css-tricks.com/snippets/javascript/javascript-array-contains/
var max = 20;


function mobileNavFunction() { //used to make a verticle navigational css menu
    var x = document.getElementById("mobileMenu"); 
    if (x.className === "menu") {   // if the class name is menu add the text " responsive"
        x.className += " responsive";
    } else {
        x.className = "menu"; //else the className is menu 
    }
}

function basketTotal(number){ //runs when basket button has been selected in xml.html. Passes the values of price, artist, title and photo
	localStorage.setItem("number", number);  //sets the value of price, artist, title and photo as variables with corresponding names in local storage
	
}

function displayTotal(){   //function used in orderform.html to retrieve local storage variables and display it
	if ("number" in localStorage){//checks to see if information has been stored in local storage
		var x,xmlhttp,xmlDoc
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "cd.xml", false);
		xmlhttp.send();
		xmlDoc = xmlhttp.responseXML; 
		x = xmlDoc.getElementsByTagName("ALBUM");
		i = localStorage["number"];
		photo = x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;
			  tableImage = document.createElement("img");
			  tableImage.setAttribute("src", photo);
			  tableImage.setAttribute("width", "100");
			  tableImage.setAttribute("height", "100");
			  tableImage.setAttribute("align", "left");
			  insertPhoto = document.getElementById("cost").appendChild(tableImage);
			  document.getElementById("cost").innerHTML = "";
			  document.getElementById("cost").appendChild(tableImage);
			document.getElementById("cost").innerHTML +=
			  "&nbsp;Item: " +
			  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
			  "<br><br>&nbsp;Artist: " +
			  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
			  "<br><br>&nbsp;Total to pay: " +
			  x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
			  "<br><br>";
			  
		/*albumImage = localStorage["photo"]; 
		albumCover = document.createElement("img"); //creates an image element and displays the album cover which was added in the basket
		albumCover.setAttribute("src", albumImage);
		albumCover.setAttribute("width", "100");
		albumCover.setAttribute("height", "100");
		albumCover.setAttribute("align", "left");
		document.getElementById("cost").appendChild(albumCover); //append it into the cost div within the order form
		document.getElementById("cost").innerHTML += "Item: "; //adds text into cost div and displays information from local storage
		document.getElementById("cost").innerHTML += localStorage["title"];
		document.getElementById("cost").innerHTML += "<br><br>Artist: ";
		document.getElementById("cost").innerHTML += localStorage["artist"];
		document.getElementById("cost").innerHTML += "<br><br>Total to pay: ";
		document.getElementById("cost").innerHTML += localStorage["price"];
		document.getElementById("cost").innerHTML += "<br><br>";*/	
	}
}

function paid(){ //this function runs when the order form passes all validation checks and changes the amount due from the specified cost to £0.00
	if ("number" in localStorage){//checks to see if information has been stored in local storage
		var x,xmlhttp,xmlDoc
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "cd.xml", false);
		xmlhttp.send();
		xmlDoc = xmlhttp.responseXML; 
		x = xmlDoc.getElementsByTagName("ALBUM");
		i = localStorage["number"];
		photo = x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;
			  tableImage = document.createElement("img");
			  tableImage.setAttribute("src", photo);
			  tableImage.setAttribute("width", "100");
			  tableImage.setAttribute("height", "100");
			  tableImage.setAttribute("align", "left");
			  insertPhoto = document.getElementById("cost").appendChild(tableImage);
			  document.getElementById("cost").innerHTML = "";
			  document.getElementById("cost").appendChild(tableImage);
			document.getElementById("cost").innerHTML +=
			  "Item: " +
			  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
			  "<br><br>Artist: " +
			  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
			  "<br><br>Total to pay: 0.00";
	}
}

function debitCard(){ //function which runs when radio button "Debit" has been selected. 
	clearText(); //clears text in inputPayment div
	cardName();  //inserts the Card Name text and adds an input box
	cardNumber(); //inserts the Card Number text and adds an input box
	cardExpDate(); //inserts the Card Exp Date text and adds an input box
	cardSecNum(); //inserts the Card Security Number and adds an input box
	captcha(); //creates the captcha with an input box
	submitButtonCreate(); //creates a submit button
}

function creditCard(){ //runs the same functions as the debitCard() function
	clearText();
	cardName();
	cardNumber();
	cardExpDate();
	cardSecNum();
	captcha();
	submitButtonCreate();
}

function voucher(){ //function which runs when radio button "Voucher" has been selected
	clearText(); //clears text in inputPayment div
	voucherCode(); //inputs the voucher code text and an input box
	captcha(); //creates the captcha with an input box
	submitButtonCreate(); //generates a submit button
}

function submitButtonCreate(){ //function used to create submit button in inputPayment div
	document.getElementById("inputPayment").innerHTML += "<br><br>";
	submitButton = document.createElement("input"); // creates input element
	submitButton.setAttribute("name", "add"); //sets attributes for the input 
	submitButton.setAttribute("type", "submit");
	submitButton.setAttribute("value", "Submit");
	submitButton.setAttribute("onclick", "javascript:validateForm()"); //links javascript onclick feature which runs the validateForm() function
	document.getElementById("inputPayment").appendChild(submitButton); //inserts the submit button
}

function cardValidate(){ //validation function for debit and credit card
	cardNameBool = cardNameValidate(); //runs functions and saves either a false or true value
	cardNoBool = cardNoValidate();
	expDateBool = expDateValidate();
	secNumBool = secNumValidate();
	if (cardNameBool == true && cardNoBool == true && expDateBool == true && secNumBool == true){ // if any of the bool vars return a false, a validation check has failed and the card inputs have not been validated
		return true; //if all the bools are true than the function returns true to show that all card related validations have come back successful 
	}
	else{
		return false; //else fail validation check
	}
}

function voucherValidate(){ //validation function for voucher payment option
	voucherInput = document.getElementById("voucher").value; //retrive the value from the voucher input box
	if (voucherInput == ""){ //if no value has been entered. Generate error text telling user to enter a voucher code and fail the validation check
		document.getElementById("errorMessage").innerHTML += "<br>Please fill in Voucher Code";
		return false;
	}
	else if (voucherInput == "XMAS2017"){ //check to see if XMAS2017 has been entered. If it has pass the validation check
		return true;
	}
	else{
		document.getElementById("errorMessage").innerHTML += "<br>Voucher Code not valid"; //if neither of the above if statements apply to the input entered, fail validation check
		return false;
	}
}


function cardNameValidate(){ //validation check for card name
	cardNameInput = document.getElementById("cardName1").value; //set variable which gets the value of the cardname input
	cardNameSymbols = correctTextValidate(cardNameInput); //set variable of a function which passes the value of card name input. Will either contain true or false (validation check failed or passed)
	if (cardNameInput == ""){ //if no input enter generate error message and fail validation check
		document.getElementById("errorMessage").innerHTML += "<br>Please fill in Card Name";
		return false;
	}
	else if (cardNameSymbols == false){ //if symbols have been entered fail validation check 
		document.getElementById("errorMessage").innerHTML += "Do not use numbers or symbols for Card Name<br>"; //display error message
		return false; //fail validation check 
	}
	else{
		return true; //if non of the if statements apply, pass the validation check
	}
}

function cardNoValidate(){ //validation check for card number 
	cardNoInput = document.getElementById("cardNo").value; //value of the card number input stored in cardNoInput variable
	cardNoLength = document.getElementById("cardNo").value.length; //length of the value of card nunber input stored in variable cardNoLength
	cardNoSymbols = correctNumValidate(cardNoInput); //passes the value of card number input into the correctNumValidate function to check if any letters or symbols have been entered
	if (cardNoLength != 16){ //if the length of the cardnumber is not 16 characters long. Fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "<br>Please enter 16 digits for card number";
		return false;
	}
	else if (cardNoInput == ""){
		document.getElementById("errorMessage").innerHTML += "<br>Please fill in Card Number"; //if no card number has been entered fail validation check and display error message
		return false;
	}
	else if (cardNoSymbols == false){ //if  the cardNoSymbols check returns false (contains alphabet or symbols so has failed) fail validation check
		document.getElementById("errorMessage").innerHTML += "Only use numbers for Card Number <br>"; //display error message
		return false;
	}
	else{
		return true; // if none of the if statements pass validation check
	}
}

function expDateValidate(){ // //validation check for expiry date 
	expDateInput = document.getElementById("cardExp").value; //store the value of expiry date in expDateInput variable
	expDateSymbols = correctNumValidate(expDateInput); //pass the expDateInput variable into the correctNumValidate function which checks no letters or symbols have been entered
	if (expDateInput == ""){ //if no expiry date has been entered. Fail validation check 
		document.getElementById("errorMessage").innerHTML += "<br>Please fill in Expiry Date";
		return false;
	}
	else if (expDateSymbols == false){ //check to see if letters or symbols are in the input. If there are, fail validation check 
		document.getElementById("errorMessage").innerHTML += "Only use numbers for Expiry Date <br>";
		return false;
	}
	else{
		return true; //if none of the if statements are appropriate pass validation check
	}
}

function secNumValidate(){ //validation check for security number
	secNumInput = document.getElementById("secNum").value; //stores the value of security number in a variable 
	secNumSymbols = correctNumValidate(expDateInput);  //pass the secNumInput variable into the correctNumValidate function which checks no letter or symbols have been entered
	secNumLength = document.getElementById("secNum").value.length; //checks the length of the security number
	
	if (secNumLength != 3){ //if the security number is not 3 numbers fail validation check
		document.getElementById("errorMessage").innerHTML += "<br>Your security number should be 3 numbers"; 
		return false;
	}
	else if (secNumInput == ""){ // if no security number is input, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "<br>Please fill in Security Number";
		return false;
	}
	else if (secNumSymbols == false){ // if the security number has letters or symbols fail validation check
		document.getElementById("errorMessage").innerHTML += "Only use numbers for Security Number <br>";
		return false;
	}
	
	else{ //if none of the if statements are appropriate pass validation check
		return true; 
	}
}



function voucherCode(){ // generate the input box for voucher payment method 
	document.getElementById("inputPayment").innerHTML += "<br><br>";
	voucherLabel = document.createElement("label");
	labelText = document.createTextNode("Voucher Code: ");
	voucherLabel.appendChild(labelText);
	document.getElementById("inputPayment").appendChild(voucherLabel);
	document.getElementById("inputPayment").innerHTML += "<br>";
	voucherTextBox = document.createElement("input"); //create element called input
	voucherTextBox.setAttribute("type", "text");
	voucherTextBox.setAttribute("id", "voucher");
	document.getElementById("inputPayment").appendChild(voucherTextBox);
}

function clearText(){ // clear error messages 
	document.getElementById("inputPayment").innerHTML = "";
}

function cardName(){ //generate the card name input
	var width = document.getElementById("inputPayment").offsetWidth;
	if (width > 350){ // if the width of the div is more than 350 just put in one new line else put in multiple new lines
		document.getElementById("inputPayment").innerHTML += "<br>";
	}
	else{
		document.getElementById("inputPayment").innerHTML += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
	}
	
	nameLabel = document.createElement("label"); 
	labelText = document.createTextNode("Cardholder Name: "); //create text 
	nameLabel.appendChild(labelText); //add text to the element label
	document.getElementById("inputPayment").appendChild(nameLabel);
	document.getElementById("inputPayment").innerHTML += "<br>";
	cardNameTextBox = document.createElement("input"); //create element called input
	cardNameTextBox.setAttribute("type", "text");
	cardNameTextBox.setAttribute("id", "cardName1");
	document.getElementById("inputPayment").appendChild(cardNameTextBox);
}

function cardNumber(){ // generate the card number input 
	label = document.createElement("label");
	labelText = document.createTextNode("Card Number: "); //create text 
	label.appendChild(labelText); //add text to the element label
	document.getElementById("inputPayment").innerHTML += "<br>";
	document.getElementById("inputPayment").appendChild(label);
	document.getElementById("inputPayment").innerHTML += "<br>";
	cardNoTextBox = document.createElement("input"); //create element called input
	cardNoTextBox.setAttribute("type", "text");
	cardNoTextBox.setAttribute("id", "cardNo");
	document.getElementById("inputPayment").appendChild(cardNoTextBox);
}

function cardExpDate(){ //generate the expiry date input
	label2 = document.createElement("label");
	labelText = document.createTextNode("Expiry Date: ");
	label2.appendChild(labelText);
	cardExpTextBox = document.createElement("input");
	cardExpTextBox.setAttribute("type", "text");
	cardExpTextBox.setAttribute("id", "cardExp");
	document.getElementById("inputPayment").innerHTML += "<br>";
	document.getElementById("inputPayment").appendChild(label2);
	document.getElementById("inputPayment").innerHTML += "<br>";
	document.getElementById("inputPayment").appendChild(cardExpTextBox);
	//label = document.createElement("label");
	//labelText = document.createTextNode("Card Expiry Date: ");
}

function cardSecNum(){ //generate the card security number input
	secLabel = document.createElement("label");
	labelText = document.createTextNode("Security Number: ");
	secLabel.appendChild(labelText);
	secTextBox = document.createElement("input");
	secTextBox.setAttribute("type", "text");
	secTextBox.setAttribute("id", "secNum");
	document.getElementById("inputPayment").innerHTML += "<br>";
	document.getElementById("inputPayment").appendChild(secLabel);
	document.getElementById("inputPayment").innerHTML += "<br>";
	document.getElementById("inputPayment").appendChild(secTextBox);
}


function validateForm(){ //runs when submit button has been pressed. Runs the clear errors functions and runs
	clearErrors();
	firstNameBool = firstNameValidate(); //set the result of each validation function into a bool. True means a validation check has passed, false means it failed
	lastNameBool = lastNameValidate();
	emailBool = emailValidate();
	addressBool = addressLineValidate();
	cityBool = cityValidate();
	postCodeBool = postCodeValidate();
	captchaBool = captchaValidate();

	if (firstNameBool == true && lastNameBool == true && emailBool == true && addressBool == true && cityBool == true && postCodeBool == true && captchaBool == true){ // if all validation checks have passed
		var radioDebit = document.getElementById("debitRadio").checked; //store the status of the radio button in a variable
		var radioCredit = document.getElementById("creditRadio").checked;
		var radioVoucher = document.getElementById("voucherRadio").checked;
		
		if (radioDebit == true || radioCredit == true){ // if the debit card or credit card radio button has been selected, run a validation function for cards
			cardBool = cardValidate(); // set the result of the validation check in a variable 
			if (cardBool == true){ // if the validation check passes, it runs the submitted function
				submitted();
			}
		}
		else if (radioVoucher == true){ // if the voucher radio button has been selected, run a validation check for voucher 
			voucherBool = voucherValidate(); // set the result of the validation check in a variable
			if (voucherBool == true){ // if the validation check passes, it runs the submitted function
				submitted();
			}
		}
		else{
			
		}
	}
	
}

function clearErrors(){
	document.getElementById("errorMessage").innerHTML = ""; // clear error messages in error message
}

function firstNameValidate(){ // obtains the value of the first name and runs a validation check
	fNInput = document.forms["details"]["firstName1"].value; //stores the value in a variable
	firstNameSymbols = correctTextValidate(fNInput); //checks to see if any numbers or symbols have been entered 
	if (fNInput == ""){ // if no first name has been entered fail validation check and display error message
		document.getElementById("errorMessage").innerHTML = "Please fill in First Name<br>";
		return false;
	}
	else if (firstNameSymbols == false){//if symbol or number validation fails, fail validation and display error message
		document.getElementById("errorMessage").innerHTML += "Do not use numbers or symbols for First Name<br>";
		return false;
	}
	else{
		return true; //if non of the if statements apply, pass validation check
	}
}

function lastNameValidate(){ // obtains the value of the last name and runs a validation check 
	lNInput = document.forms["details"]["lastName"].value; //stores value in variable
	lastNameSymbols = correctTextValidate(lNInput); //runs function to check if symbols or numbers have been entered 
	if (lNInput == ""){ //if no last name has been entered, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Please fill in Last Name<br>";
		return false;
	}
	else if (lastNameSymbols == false){ // if there are submbols or numbers in input, fail check
		document.getElementById("errorMessage").innerHTML += "Do not use numbers or symbols for Last Name<br>";
		return false;
	}
	else{
		return true; //if none of the if statements apply, pass validation check
	}
}

function emailValidate(){ //obtains the value of email and runs a validation check
	eInput = document.forms["details"]["email"].value; //stores value in variable
	splitE = eInput.split(''); // splits the variable into individaul characters 
	atSign = splitE.indexOf("@"); //checks all of the characters to see if the symbol '@' has been entered 
	dot = splitE.indexOf("."); // checks all of the characters to see if the symbol '.' has been entered 
	if (eInput == ""){ // if no input has been entered, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Please fill in Email<br>";
		return false;
	}
	else if (atSign == -1 || dot == -1){ //if there is no presence of '@' and '.' fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Not a valid email<br>";
		return false;
	}
	else{
		return true; // if none of the if statements apply, pass validation check 
	}
}

function addressLineValidate(){ //obtains the value of address line 1 and runs a validation check
	addInput = document.forms["details"]["address1"].value; // stores value in variable
	addSymbols = correctTextNumValidate(addInput); // checks to see no symbols have been entered
	if (addInput == ""){ // if no input has been entered, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Please fill in Address Line 1<br>";
		return false;
	}
	else if (addSymbols == false){ //if the symbols validation check fail, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Do not use symbols for Address Line 1<br>";
		return false;
	}
	else {
		return true; // if none of the if statements apply, pass validation check
	}
}

function cityValidate(){ //obtains the value of City and runs a validation check
	cityInput = document.forms["details"]["city"].value; // stores the value in a variable
	citySymbols = correctTextValidate(cityInput); //checks to see numbers or symbols have been entered
	if (cityInput == ""){ //if nothing has been entered, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Please fill in City<br>";
		return false;
	}
	else if (citySymbols == false){ //if symbols have been input, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Do not use numbers or symbols for City<br>";
		return false;
	}
	else{
		return true; // if none of the if statements apply, pass validation check 
	}
}

function postCodeValidate(){ //obtains the value of Postcode and runs a validation check
	postCodeInput = document.forms["details"]["postcode"].value; // stores the value in a variable
	postCodeSymbols = correctTextNumValidate(postCodeInput); // checks if any symbols have been entered
	if (postCodeInput == ""){ // if nothing has been input, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Please fill in Postcode";
		return false;
	}
	else if (postCodeSymbols == false){ //if symbols have been entered, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "Do not use symbols for Post Code<br>"; 
		return false;
	}
	else{
		return true; //if none of the if statements apply, pass validation check
	}
	
}


function captcha(){ // function used to generate a unique captcha
	var randomNo1 = Math.floor(Math.random()*(max - min)) +min; //first random number 
	var randomNo2 = Math.floor(Math.random()*(max - min)) +min; //second random number 
	var randomSymbol = symbol[Math.floor(Math.random() * symbol.length)]; //generates a random maths symbol
	while (randomNo1 < randomNo2){ // if the first random number is less than the second random number, reload the random numbers until the first number is higher
		var randomNo1 = Math.floor(Math.random()*(max - min)) +min;
		var randomNo2 = Math.floor(Math.random()*(max - min)) +min;
	}
	
	captchaLabel = document.createElement("label"); //insert captcha into page 
	captchaText = document.createTextNode("Please complete the maths question to submit:"); //
	captchaLabel.appendChild(captchaText);
	captchaProblem = document.createElement("label");
	captchaProblem.setAttribute("class", "captchaText")
	captchaProblemText = document.createTextNode(randomNo1+randomSymbol+randomNo2);
	captchaProblem.appendChild(captchaProblemText);
	captchaTextBox = document.createElement("input");
	captchaTextBox.setAttribute("type", "text");
	captchaTextBox.setAttribute("id", "captcha");
	var currentSymbol = symbol.indexOf(randomSymbol);
	
	if (currentSymbol == 0){ // if the current symbol is +. The answer is the numbers added together
		answer = randomNo1 + randomNo2;
	}
	else if (currentSymbol == 1){ // if the current symbol is -. The answer is the numbers minues
		answer = randomNo1 - randomNo2;
	}
	else if (currentSymbol == 2){ //if the current symbol is *. The  answer is the numbers multiplied
		answer = randomNo1 * randomNo2;
	}
	else{}
	
	document.getElementById("inputPayment").innerHTML += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
	document.getElementById("inputPayment").appendChild(captchaLabel);
	document.getElementById("inputPayment").appendChild(captchaProblem);
	document.getElementById("inputPayment").innerHTML += "<br>";
	document.getElementById("inputPayment").appendChild(captchaTextBox);
}

function captchaValidate(){ // checks to see if the correct answer has been input.
	captchaInput = document.getElementById("captcha").value; //stores the entered value into a variable
	if (captchaInput == ""){ // if no input has been input, then fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "<br>Please fill in captcha<br>";
		return false;
	}
	else if (captchaInput != answer){ // if input does not equal the answer, fail validation check and display error message
		document.getElementById("errorMessage").innerHTML += "<br>Incorrect captcha";
		return false;
	}
	else{}
	
	if (captchaInput == answer){ // if input equals the answer, pass validation check and display error message, else fail validation check
		return true;
	}
	else{
		return false;
	}
}

function correctTextValidate(input){ //this function checks if symbols or numbers are input into forms
	splitInput = input.split(''); //split input into individual characters
	correctBool = true; // boolean used to specify if validation has passed or failed.
	for (i=0; i<notAllowedArray.length; i++){ // for loop which goes through every not allowed symbol in the notAllowedArray and compares it with the split input 
		checkText = splitInput.indexOf(notAllowedArray[i])
		if (checkText >= 0){ //if a match appears, set boolean to false
			correctBool = false;
		}
		
	}
	
	if (correctBool == true){ // if correctBool is true, pass validation check else fail validation check
		return true;
	}
	else{
		return false;
	}
}

function correctTextNumValidate(input){ // this function checks if symbols are input into forms
	splitInput = input.split(''); // splits input into individual characters 
	correctBool = true; //boolean used to specify if validation has passed or failed
	for (i=0; i<notAllowedSymArray.length; i++){ // for loop  which goes through every not allowed symbols in the notAllowedSymArray and compares it with the split input
		checkText = splitInput.indexOf(notAllowedSymArray[i]) 
		if (checkText >= 0){ // if a match appears, set boolean to false
			correctBool = false;
		}
		
	}
	
	if (correctBool == true){ // if correctBool is true, pass validation check, else fail validation check
		return true;
	}
	else{
		return false;
	}
}

function correctNumValidate(input){ // this function checks if symbols are input into forms
	splitInput = input.split('');
	correctBool = true;
	for (i=0; i<notAllowedSymAlphArray.length; i++){
		checkText = splitInput.indexOf(notAllowedSymAlphArray[i])
		if (checkText >= 0){
			correctBool = false;
		}
		
	}
	
	if (correctBool == true){
		return true;
	}
	else{
		return false;
	}
}

function submitted(){ // function which runs if all validation checks passes. Displays submitted information message and puts cost due to £0.00
	document.getElementById("errorMessage").innerHTML += "Submitted information. Check your emails";
	document.getElementById("personalInfoForm").innerHTML = "";
	document.getElementById("paymentForm").innerHTML = "";
	document.getElementById("inputPayment").innerHTML = "";
	document.getElementById("cost").innerHTML = "";
	paid();
}