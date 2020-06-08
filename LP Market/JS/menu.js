hiphopMenuBool = false; //used to identify if category images have been clicked or not 
rnbMenuBool = false;

function mobileNavFunction() { //used to display mobile menu 
    var x = document.getElementById("mobileMenu"); 
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function rnbMenu(){ //if bool is false, run functions to display albums
	if (rnbMenuBool == false){ 
		rnbMenuBool = true;
		document.getElementById("rnbContent").innerHTML = ""; //clear rnbContent div
		rnbAlbum1(); //display 4 albums
		rnbAlbum2();
		rnbAlbum3();
		rnbAlbum4();
	}
	else{ // if the albums are already displayed remove the albums
		rnbMenuBool = false;
		document.getElementById("rnbContent").innerHTML = "";
	}
}

function hiphopMenu(){ //same as rnbMenu function except for hiphop
	if (hiphopMenuBool == false){
		hiphopMenuBool = true;
		document.getElementById("hiphopContent").innerHTML = "";
		hiphopAlbum1();
		hiphopAlbum2();
		hiphopAlbum3();
		hiphopAlbum4();
	}
	else{
		hiphopMenuBool = false;
		document.getElementById("hiphopContent").innerHTML = "";
	}
}

function rnbAlbum1(){ //display first album
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/blonde.jpg"); 
	album.setAttribute("class", "rnbAlbum1");
	album.setAttribute("alt", "Frank Ocean Blonde");
	album.setAttribute("title", "Frank Ocean Blonde");
	
	document.getElementById("rnbContent").appendChild(album);
	photo = document.createElement("a"); //set link for photo
	photo.setAttribute("id", "photo1");
	photo.setAttribute("href", "XML.html#Blonde"); //uses anchor to help with identification of which album was selected https://stackoverflow.com/questions/15481911/linking-to-a-specific-part-of-a-web-page
	photo.appendChild(album);
	document.getElementById("rnbContent").appendChild(photo);
}

function rnbAlbum2(){  //same as rnbAlbum1
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/malibu.jpg");
	album.setAttribute("class", "rnbAlbum2");
	album.setAttribute("alt", "Anderson Paak Malibu");
	album.setAttribute("title", "Anderson Paak Malibu");

	document.getElementById("rnbContent").appendChild(album);
	
	photo = document.createElement("a");
	photo.setAttribute("id", "photo2");
	photo.setAttribute("href", "XML.html#Malibu");
	photo.appendChild(album);
	document.getElementById("rnbContent").appendChild(photo);
}

function rnbAlbum3(){ //same as rnbAlbum1
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/echoes.jpg");
	album.setAttribute("class", "rnbAlbum3");
	album.setAttribute("alt", "The Weeknd Echoes of Silence");
	album.setAttribute("title", "The Weeknd Echoes of Silence");
	document.getElementById("rnbContent").appendChild(album);
	
	photo = document.createElement("a");
	photo.setAttribute("id", "photo3");
	photo.setAttribute("href", "XML.html#Echoes");
	photo.appendChild(album);
	document.getElementById("rnbContent").appendChild(photo);
}

function rnbAlbum4(){ //same as rnbAlbum1
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/channelOrange.jpg");
	album.setAttribute("class", "rnbAlbum4");
	album.setAttribute("alt", "Frank Ocean Channel Orange");
	album.setAttribute("title", "Frank Ocean Channel Orange");
	document.getElementById("rnbContent").appendChild(album);
	
	photo = document.createElement("a");
	photo.setAttribute("id", "photo4");
	photo.setAttribute("href", "XML.html#Channel");
	photo.appendChild(album);
	document.getElementById("rnbContent").appendChild(photo);
}

function hiphopAlbum1(){ //display hiphop image and set attributes
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/yeezus.jpg");
	album.setAttribute("class", "hiphopAlbum1");
	album.setAttribute("alt", "Kanye West Yeezus");
	album.setAttribute("title", "Kanye West Yeezus");
	document.getElementById("hiphopContent").appendChild(album);
	
	photo = document.createElement("a"); //create link for image 
	photo.setAttribute("id", "photo5");
	photo.setAttribute("href", "XML.html#Yeezus"); //uses anchor to help identify which album was selected
	photo.appendChild(album);
	document.getElementById("hiphopContent").appendChild(photo);
}

function hiphopAlbum2(){ //same as hiphopAlbum1
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/rodeo.jpg");
	album.setAttribute("class", "hiphopAlbum2");
	album.setAttribute("alt", "Travis Scott Rodeo");
	album.setAttribute("title", "Travis Scott Rodeo");
	document.getElementById("hiphopContent").appendChild(album);
	
	photo = document.createElement("a");
	photo.setAttribute("id", "photo6");
	photo.setAttribute("href", "XML.html#Rodeo");
	photo.appendChild(album);
	document.getElementById("hiphopContent").appendChild(photo);
}

function hiphopAlbum3(){ //same as hiphopAlbum1
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/aquemini.jpg");
	album.setAttribute("class", "hiphopAlbum3");
	album.setAttribute("alt", "Outkast Aquemini");
	album.setAttribute("title", "Outkast Aquemini");
	document.getElementById("hiphopContent").appendChild(album);
	
	photo = document.createElement("a");
	photo.setAttribute("id", "photo7");
	photo.setAttribute("href", "XML.html#Aquemini");
	photo.appendChild(album);
	document.getElementById("hiphopContent").appendChild(photo);
}

function hiphopAlbum4(){ //same as hiphopAlbum1
	album = document.createElement("img");
	album.setAttribute("src", "images/albums/444.jpg");
	album.setAttribute("class", "hiphopAlbum4");
	album.setAttribute("alt", "Jay Z 4:44");
	album.setAttribute("title", "Jay Z 4:44");
	document.getElementById("hiphopContent").appendChild(album);
	
	photo = document.createElement("a");
	photo.setAttribute("id", "photo8");
	photo.setAttribute("href", "XML.html#444");
	photo.appendChild(album);
	document.getElementById("hiphopContent").appendChild(photo);
}