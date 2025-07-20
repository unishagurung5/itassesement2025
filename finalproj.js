// opening and closing sidepanel
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


//nav bar
window.addEventListener("resize", function () {
const sidepanel = document.getElementById("mySidepanel");

if (window.innerWidth > 785 && sidepanel.style.width !== "0px") {
  closeNav(); // Automatically close if panel is open and screen is wide
}
});


//which i scroll, the header becomes white
window.addEventListener("scroll", function() {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

