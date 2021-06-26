// anonymus function
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navItems = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener('click',()=>{
    // ul animation
    navItems.classList.toggle('nav-active');

    // link items animation
    navLinks.forEach((link,index)=>{
      if(link.style.animation){
        link.style.animation=``;
      }else{
        link.style.animation = `navLinkFade 0.4s ease forwards ${index/4 +.4}s`;
        // console.log(index/4+0.4);
      }
    });

    // burger animation
    burger.classList.toggle("toggle");

  });

}



navSlide();
