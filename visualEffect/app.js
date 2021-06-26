function introTextAnimation() {
  var introText = document.querySelector(".intro-text");
  var introTextPosition =  introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/1.5;

  if(-10<introTextPosition&&introTextPosition<screenPosition){
    introText.classList.add('intro-text-animation');
  }else{
    introText.classList.remove("intro-text-animation");
  }
}


window.addEventListener('scroll',introTextAnimation);
