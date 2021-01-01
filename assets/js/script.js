
/* When the user scrolls down*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  breadcrumbsProgressbar()
  breadcrumbsHide()
}

// load progressbar
function breadcrumbsProgressbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("pageProgress").style.width = scrolled + "%";
}

// Hide breadcrumbs
function breadcrumbsHide() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("breadcrumbs").style.top = "0";
    document.getElementById("pageProgress").style.background = "var(--gray-4)";
  } else {
    document.getElementById("breadcrumbs").style.top = "-64px";
    document.getElementById("pageProgress").style.background = "var(--primary)";
  }
  prevScrollpos = currentScrollPos;
}
