let scrollableSection = document.querySelector('.scrollable');
let images = [...document.querySelectorAll('.img')]; // ... is to get the elements from iterable objects

let current = 0;
let target = 0;
let ease = 0.1;


document.body.style.height = `${scrollableSection.getBoundingClientRect().height}px`

images.forEach((image,idx)=>{
  image.style.backgroundImage=`url(images/img${idx+1}.jpg)`
})

function lerp(start,end,t){
  return start * (1 - t) + end * t;
}

function animate(){
  target = window.scrollY;
  current = lerp(current, target, ease);
  // translate3d allow to move in all three axis here two is given and as we scroll down images move up so negtive y is given
  scrollableSection.style.transform = `translate3d(0,${-current}px,0)`; // give smooth scrolling
  // scrollableSection.style.transform = `translateY(${-current}px)`

  console.log("animate call");
  images.forEach(image=>{
    let top = image.parentElement.getBoundingClientRect().top;
    image.style.transform = `rotateX(${top*0.1}deg) rotateY(${top*0.1}deg)`

  })
  requestAnimationFrame(animate);
}

animate();

console.log("amazing")
