const navbarNav= document.querySelector(".navbar-nav");

document.querySelector("#acce").onclick = () => {
  navbarNav.classList.toggle("active");
};

const acce = document.querySelector("#acce");

document.addEventListener("click", function (e){
  if (!acce.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove("active");
  }
});
