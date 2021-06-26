
const text = document.querySelector(".fancy"); // to select the h1
const strText = text.textContent; // to select the text - Omnish Kumar
const splitText = strText.split(""); // to split the letters and store in array
text.textContent = "";
// to alter whole heading span the each letter so use for loop for that
for(i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+strText[i]+"</span>";

}

// add class fade to each span element
let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
  const span = text.querySelectorAll('span')[char]; // [span,span,....,span] total 10 spans
  span.classList.add("fade");
  char++;
  if (char===splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}
