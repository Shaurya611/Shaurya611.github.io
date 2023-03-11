window.addEventListener("scroll", function(){
    let header = document.querySelector(".Navbar_div");
    header.classList.toggle("sticky", window.scrollY > 0);
})