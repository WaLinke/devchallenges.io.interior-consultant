const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navbar_list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

