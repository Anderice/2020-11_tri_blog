// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("pageProgress").style.width = scrolled + "%";
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("breadcrumbs").style.top = "0";
  } else {
    document.getElementById("breadcrumbs").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
