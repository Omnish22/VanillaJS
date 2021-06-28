let current=0; // amount of pixel current containers scroll by
let target = 0; // current scroll position
let ease = 0.1

let windowWidth, containerHeight, imageHeight, skewDiff;

let container = document.querySelector('.container');
let images = Array.from(document.querySelectorAll('.img_wrap'));
// console.log(images)

// this is for adding images
images.forEach((image,idx)=>{
  image.style.backgroundImage=`url(images/img${idx+1}.jpg)`
})

// this is linear interpolation
// t is ease, start is current and end is target
function lerp(start,end,t){
  return start*(1-t)+end*t;
}
// console.log(lerp(10,15,0.5));

function setTransform(element,transform){
  element.style.transform = transform;
}

// this function will be call when page is load
function setupAnimation(){
  windowWidth = window.innerWidth; // 907px
  containerHeight = container.getBoundingClientRect().height; // height of container which is 2500px
  imageHeight = containerHeight / (windowWidth > 760 ? images.length / 2 : images.length);

  // this will bring the scroll bar on window
  document.body.style.height = `${containerHeight}px`;
  smoothScroll()
}

function smoothScroll(){
  current = lerp(current, target, ease); // current is to scroll container
  current = parseFloat(current.toFixed(2)); // changes to two decimal places
  target = window.scrollY  // from scroll of body

  setTransform(container, `translateY(${-current}px)`) // this will move container
  updateImages();
  requestAnimationFrame(smoothScroll); // this will kick smoothScroll function continously
}

function updateImages(){
  let ratio = current / imageHeight;
  let intersectionRatioIndex, intersectionRatioValue;

  images.forEach((image,idx)=>{
    intersectionRatioIndex = windowWidth > 760 ? parseInt(idx / 2) : idx;
    intersectionRatioValue = ratio - intersectionRatioIndex;
    setTransform(image,`translateY(${intersectionRatioValue * 70}px)`)
  })
}

setupAnimation();
