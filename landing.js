// Selecting linebars, sidenavbarsection for displaying the side navbar

var linebars = document.getElementById("linebars");
var sidenavbarsection = document.querySelector(".sidenavbarsection")
linebars.addEventListener("click",function(){
    sidenavbarsection.style.display="block";
})

// Selecting xmark for not displaying the side navbar

var xmark = document.querySelector(".xmark")
xmark.addEventListener("click",function(){
    sidenavbarsection.style.display="none";
})

// Selecting sidehome, sidefood, sideabout

var sidehome = document.getElementById("sidehome");
var sidefood = document.getElementById("sidefood");
var sideabout = document.getElementById("sideabout");
sidehome.addEventListener("click",function(){
    sidenavbarsection.style.display="none";
})
sidefood.addEventListener("click",function(){
    sidenavbarsection.style.display="none";
})
sideabout.addEventListener("click",function(){
    sidenavbarsection.style.display="none";
})
