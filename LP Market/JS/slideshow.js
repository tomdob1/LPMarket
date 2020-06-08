	var timerBool = false;
	var slideCounter = 0;
	var counter = 0; //counter used to select items from array
	var slide = [1,2,3,4,5]; //stores numbers, which are used to differentiate between images
	var min = 0;
	var max = 5;
	var captionText = ["SYRE - Jaden Smith", "No Dope On Sundays - CyHi The Prynce", "ShaqIsDope - ShaqIsDope", "4eva Is A Mighty Long Time - Big Krit", "Without Warning - Metro, 21, Offset"]; //array containing captions
	
	
function mobileNavFunction() { //function used for mobile menu navigation
    var x = document.getElementById("mobileMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

//https://stackoverflow.com/questions/11179988/javascript-change-image-slowly-with-fade-using-timer-and-opacity
function opacityIncrease(){
	document.getElementById("img1").style.opacity = 0.9;
}

function opacityIncrease2(){
	document.getElementById("img1").style.opacity = 0.7;
}

function opacityIncrease3(){
	document.getElementById("img1").style.opacity = 0.5;
}

function opacityIncrease4(){
	document.getElementById("img1").style.opacity = 0.3;
}

function opacityIncrease5(){
	document.getElementById("img1").style.opacity = 0.1;
}

function opacityDecrease5(){
	document.getElementById("img1").style.opacity = 1;
}

function timerButtonTransition(){
	setTimeout(function() {timerButton()}, 200);	
}

function moveToNextSlideTransition(){ //function used when next button pressed in slide show
	setTimeout(function() {moveToNextSlide()}, 200);
	setTimeout(function() {opacityIncrease()}, 100);
	setTimeout(function() {opacityIncrease2()}, 100);
	setTimeout(function() {opacityIncrease3()}, 100);	
}

function moveToNextSlideTransition2(){ 
	setTimeout(function() {moveToNextSlide2()}, 200);
	setTimeout(function() {opacityIncrease()}, 100);
	setTimeout(function() {opacityIncrease2()}, 100);
	setTimeout(function() {opacityIncrease3()}, 100);	
}

function moveToPreviousSlideTransition(){
	setTimeout(function() {moveToPreviousSlide()}, 200);
	setTimeout(function() {opacityIncrease()}, 100);
	setTimeout(function() {opacityIncrease2()}, 100);
	setTimeout(function() {opacityIncrease3()}, 100);	
}

function firstSlideTransition(){
	setTimeout(function() {firstSlide()}, 200);
	setTimeout(function() {opacityIncrease()}, 100);
	setTimeout(function() {opacityIncrease2()}, 100);
	setTimeout(function() {opacityIncrease3()}, 100);
}

function lastSlideTransition(){
	setTimeout(function() {lastSlide()}, 200);
	setTimeout(function() {opacityIncrease()}, 100);
	setTimeout(function() {opacityIncrease2()}, 100);
	setTimeout(function() {opacityIncrease3()}, 100);
}

function randomSlideTransition(){
	setTimeout(function() {randomSlide()}, 200);
	setTimeout(function() {opacityIncrease()}, 100);
	setTimeout(function() {opacityIncrease2()}, 100);
	setTimeout(function() {opacityIncrease3()}, 100);
}

function moveToNextSlide(){
	
	setTimeout(function() {opacityDecrease5()}, 100);
	if (timerBool == true){ //if timer is running stop timer and set timer bool to false 
		stopTimer(); 
		timerBool = false;
	}
	thumbNailBlue(counter); // pass the value of counter into function. Used to get rid of highlight from the previous thumbnail
	if(counter >= slide.length - 1){  //if the slide currently showing is the final slide in the array, change value of counter to -1
		counter = -1;
	}	
	counter = counter + 1; //move to the next slide
	var img = document.getElementById("img1"); 
	
	var slideName="images/image"+slide[counter]+".jpg"; //display slide
	img.src=slideName; //change the slide to the next image 
	thumbNailBlack(counter); // highlight the current thumbnail
	captions(counter); //sets the caption to match the relevant photo 

	
}

function moveToNextSlide2(){ //function used to move the slideshow automatically on a timer. Does not stop timer
	setTimeout(function() {opacityDecrease5()}, 100);
	thumbNailBlue(counter);
	if(counter >= slide.length - 1){  //if the slide currently showing is the final slide in the array, change value of counter to -1
		counter = -1;
	}	
	counter = counter + 1; //move to the next slide
	var img = document.getElementById("img1");
	
	var slideName="images/image"+slide[counter]+".jpg"; //display slide
	img.src=slideName;
	thumbNailBlack(counter);
	captions(counter);
}

function moveToPreviousSlide(){ //does the same as move to next slide except minuses the counter 
	setTimeout(function() {opacityDecrease5()}, 100);
	if (timerBool == true){
		stopTimer();
		timerBool = false;
	}
	thumbNailBlue(counter);
	if (counter == 0){ //if the first image is showing change the counter to a value above the last slide
		counter = slide.length; 
	}

	counter = counter - 1; //decrease slide value by 1 so that the previous slide is showing
	
	
	var img = document.getElementById("img1");
	var slideName="images/image"+slide[counter]+".jpg";
	img.src = slideName;
	thumbNailBlack(counter);
	captions(counter);
}


function randomSlide(){ // generates a random slide 
	setTimeout(function() {opacityDecrease5()}, 100);
	if (timerBool == true){ //if the timer is running stop timer
		stopTimer();
		timerBool = false;
	}
	thumbNailBlue(counter); //get rid of border for previous thumbnail
	counter = randomCalc(); //sets the counter to a random number (random slide)
	
	
	var img = document.getElementById("img1"); //displays image
	var slideName="images/image"+slide[counter]+".jpg";
	previousRandom = counter;
	img.src = slideName;
	
	thumbNailBlack(counter); //sets black border for thumbnail
	captions(counter); //sets caption for photo
}


function firstSlide(){ //function used to go to the first slide
	setTimeout(function() {opacityDecrease5()}, 100);
	if (timerBool == true){ //if timer is running stop timer
		stopTimer();
		timerBool = false;
	}
	thumbNailBlue(counter); // get rid of black border of previous thumbnail
	counter = 0;
	var img = document.getElementById("img1"); //display image
	var slideName="images/image"+slide[counter]+".jpg";
	img.src = slideName;
	thumbNailBlack(counter); //display black border on appropriate thumbnail
	captions(counter);
}

function lastSlide(){ //same as first slide but for the last slide
	setTimeout(function() {opacityDecrease5()}, 100);
	if (timerBool == true){
		stopTimer();
		timerBool = false;
	}
	thumbNailBlue(counter);
	counter = slide.length -1;
	var img = document.getElementById("img1");
	var slideName="images/image"+slide[counter]+".jpg";
	img.src = slideName;
	thumbNailBlack(counter);
	captions(counter);
}

function randomCalc(){ //function used to generate a random number
	var random = Math.floor(Math.random()*(max - min)) +min;
	return random;
}

function timerButton(){ //function which runs when the play button has been selected
	if (timerBool == false){ //if timer is paused
		if (slideCounter > 0){ //if this is not the first time this function has run, pause the slide show
			stopTimer();
		}
		timerBool = true; //indicate that timer is on
		timer(); //start timer function
		slideCounter++; //set that play has been pressed
	}
	else {
		timerBool = false; //if timer is running and play button has been selected stop timer
		
		stopTimer();
	}
}

function timer(){ //change slide every 3 seconds 
	timedShow = setInterval(function() {moveToNextSlideTransition2()}, 3000);
	document.getElementById("play").innerHTML = "&#10074;&#10074;"; //display pause icon in button
}

function stopTimer(){ //stop the timer by clearing the interval
	clearInterval(timedShow);
	document.getElementById("play").innerHTML = "&#9658;"; //display the play button https://stackoverflow.com/questions/9281118/how-do-i-display-play-forward-or-solid-right-arrow-symbol-in-html
}

function tSlide(counter2){ //function which runs if a thumbnail is selected
	if (timerBool == true){ //if timer is running stop timer
		stopTimer();
	}
	thumbNailBlue(counter); //remove border for previous thumbnail
	img = document.getElementById("img1"); //display relevant image
	slideName="images/image"+slide[counter2]+".jpg";
	img.src = slideName;
	thumbNailBlack(counter2); //put black border around current thumbnail
	counter = counter2; //set image counter to be the same as the thumbnail counter
	captions(counter); //set the relevant caption to be displayed
}



function thumbNailBlue(counter){ //used to remove border from previous thumbnail
	counter2 = counter + 1;
	tNName = "tn"+counter2;
	document.getElementById(tNName).style.border = "";
}

function thumbNailBlack(counter){ //used to set border for current thumbnail
	counter2 = counter + 1;
	tNName = "tn"+counter2;
	document.getElementById(tNName).style.border = '2px solid black';
}


function captions(counter){ //used to display appropriate caption for image
	document.getElementById("photoCaption").innerHTML = captionText[counter];
}

