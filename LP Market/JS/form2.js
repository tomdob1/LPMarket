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