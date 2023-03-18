// window.addEventListener("scroll", function(){
//     let header = document.querySelector(".Navbar_div");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })

let burger_icon = document.querySelector(".ham_icon");
burger_icon.addEventListener("click", () =>{
    let navbar =document.querySelector(".burger_icons");
    navbar.style.display="block";
})

let cross = document.querySelector(".cross");
cross.addEventListener("click", ()=>{
    let navbar =document.querySelector(".burger_icons");
    navbar.style.display="none";
})