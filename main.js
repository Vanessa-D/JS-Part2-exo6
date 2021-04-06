// Fonction qui dans le DOM va chercher la source de l'image à afficher au passage de la souris 
// à l'endroit de l'id image
function setNewImage1(){
    document.getElementById("img1").src="images/image1_2.jpg";
}
// Fonction qui dans le DOM va chercher la source de l'image à afficher lorsque la souris ne pointe plus l'image 
// à l'endroit de l'id image
function setOldImage1(){
    document.getElementById("img1").src="images/image1.jpg";
}
function setNewImage2(){
    document.getElementById("img2").src="images/image2_2.jpg";
}
function setOldImage2(){
    document.getElementById("img2").src="images/image2.jpg";
}
function setNewImage3(){
    document.getElementById("img3").src="images/image3_2.jpg";
}
function setOldImage3(){
    document.getElementById("img3").src="images/image3.jpg";
}
function setNewImage4(){
    document.getElementById("img4").src="images/image4_2.jpg";
}
function setOldImage4(){
    document.getElementById("img4").src="images/image4.jpg";
}
function setNewImage5(){
    document.getElementById("img5").src="images/image5_2.jpg";
}
function setOldImage5(){
    document.getElementById("img5").src="images/image5.jpg";
}


// Solution concentrée avec un paramètre dans la fonction :

//function setNewImage(test){
    //document.getElementById("test").src="images/" + test + "_2.jpg";
//}

//function setOldImage(test){
    //document.getElementById("test").src="images/" + test + ".jpg";
//}

// HTML :
//<img id="image1" onmouseover="setNewImage(id)" onmouseout="setOldImage(id)" src="images/image1.jpg" alt="Couverture du livre HTML et JavaScript">