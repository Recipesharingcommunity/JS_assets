
// selecting foodcollections,inputvalue for search filter
var inputvalue=document.getElementById("inputvalue")
var foodcollections=document.querySelector(".foodcollections")
var foodcollection=foodcollections.querySelectorAll("div")
inputvalue.addEventListener("keyup",function(event){
    var enterValue=event.target.value.toUpperCase()
for(var i=0;i<foodcollection.length;i++){
    var elements=foodcollection[i].querySelector("p").textContent
    if(elements.toUpperCase().indexOf(enterValue)<0){
        foodcollection[i].style.display="none"
    }
    else{
        foodcollection[i].style.display="block"
    }
}
})

// selecting xmark2,ingredient,xmark3,ingredienttwo,xmark9,ingredienteight
var xmark2=document.getElementById("xmark2")
var xmark3=document.getElementById("xmark3")
var xmark4=document.getElementById("xmark4")
var xmark5=document.getElementById("xmark5")
var xmark6=document.getElementById("xmark6")
var xmark7=document.getElementById("xmark7")
var ingredient=document.querySelector(".ingredient")
var ingredienttwo=document.querySelector(".ingredienttwo")
var ingredientthree=document.querySelector(".ingredientthree")
var ingredientfour=document.querySelector(".ingredientfour")
var ingredientfive=document.querySelector(".ingredientfive")
var ingredientsix=document.querySelector(".ingredientsix")
xmark2.addEventListener("click",function(){
    ingredient.style.display="none"
})
xmark3.addEventListener("click",function(){
    ingredienttwo.style.display="none"
})
xmark4.addEventListener("click",function(){
    ingredientthree.style.display="none"
})
xmark5.addEventListener("click",function(){
    ingredientfour.style.display="none"
})
xmark6.addEventListener("click",function(){
    ingredientfive.style.display="none"
})
xmark7.addEventListener("click",function(){
    ingredientsix.style.display="none"
})
function show(){
    ingredient.style.display="block"
}
function showtwo(){
    ingredienttwo.style.display="block"
}
function showthree(){
    ingredientthree.style.display="block"
}
function showfour(){
    ingredientfour.style.display="block"
}
function showfive(){
    ingredientfive.style.display="block"
}
function showsix(){
    ingredientsix.style.display="block"
}

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
