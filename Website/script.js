function e() {
	document.getElementById("body").style.background = "linear-gradient(to bottom right, " + ("#" + (Math.floor(Math.random() * 999999) + 100000)) + ", " + ("#" + (Math.floor(Math.random() * 999999) + 100000)) + ")";

	document.getElementById("name").style.color = "#" + (Math.floor(Math.random() * 999999) + 100000);
}
setInterval(e, 3000);
function onCl(x) {
  if (x == 1) {
    window.location = "home.html";
  }
  if (x == 2) {
    window.location = "games.html";
  }
  if (x == 3) {
    window.location = "videos.html";
  }
}
