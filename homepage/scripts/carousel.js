/* De random start "ergens" in de eerste 10, als er minder dan 10 slides zijn, dan wordt het weer de 1e */
var myIndex = Math.floor((Math.random() * 10) + 1);
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 10000); // Change image every 10 seconds
}
