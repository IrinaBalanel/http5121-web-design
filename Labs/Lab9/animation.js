var button = document.getElementById("btn-play-pause");
var sky = document.getElementById("sky");
var sun = document.getElementById("sun");

function playPause(){
    if (sky.style.animationPlayState === "paused") {
        sky.style.animationPlayState = "running";
    } else {
        sky.style.animationPlayState = "paused";
    }

    if (sun.style.animationPlayState === "paused") {
        sun.style.animationPlayState = "running" ;
    } else {
        sun.style.animationPlayState = "paused";
    }
}

button.onclick = playPause;
