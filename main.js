/* ---------------------------- On scroll Navbar ---------------------------- */
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
/* -------------------------------------------------------------------------- */

/* ---------------------------- Scroll Top Button --------------------------- */
var mybutton = document.getElementById("mybtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* -------------------------------------------------------------------------- */

/* -------------------------------- Read More ------------------------------- */

let isShow = false;

let para3 = document.getElementById("para-3");
let para2 = document.getElementById("para-2");

let readMore = document.getElementById("read-more");

readMore.addEventListener("click", function () {
  if (isShow) {
    para2.classList.add("show1");
    para3.classList.add("show1");
    readMore.innerHTML = 'Read More <i class="fa-solid fa-angles-down"></i>';
  } else {
    para2.classList.remove("show1");
    para3.classList.remove("show1");
    readMore.innerHTML = 'Read Less <i class="fa-solid fa-angles-up"></i>';
  }
  isShow = !isShow;
});
/* -------------------------------------------------------------------------- */
