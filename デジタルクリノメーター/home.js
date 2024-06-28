window.addEventListener("deviceorientation", function(e) {
    let beta = Math.floor(e.beta);
    document.getElementById("beta").innerHTML = "傾斜 "+beta+"°";
}, false);

function start(){
    document.getElementById("top").style.display = "none";
    document.getElementById("main").style.display = "block";
}