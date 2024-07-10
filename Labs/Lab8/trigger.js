// to set animation on click
var animationButton = document.getElementById("click-button");
animationButton.addEventListener("click", function(){
    var shape = document.getElementById("shape");
    shape.classList.add("animated-shape");
});

// to reset the shape
var shape = document.getElementById("shape");
shape.addEventListener("transitionend", function(){
    shape.classList.remove("animated-shape");
    // console.log("reset is done")
}); 