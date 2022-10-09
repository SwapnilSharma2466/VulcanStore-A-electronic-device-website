
let pinkBtn = document.getElementById("pink");
let whiteBtn = document.getElementById("white");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");

pinkBtn.onclick = function () {
    bike.style.backgroundImage = "url(Images/1.png)";
}
whiteBtn.onclick = function () {
    bike.style.backgroundImage = "url(Images/2.png)";
}
blackBtn.onclick = function () {
    bike.style.backgroundImage = "url(Images/4.png)";
}
