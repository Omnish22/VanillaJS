/*
1- we can use querySelector or any selector at any branch i.e. document, parent or at child elements
2- use preventDefault to prevent enter value from vanishing.
3- className is use to extract element class name

*/







const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2")

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




function showError(element,msg){

  let formControl = element.parentElement;
  formControl.classList.add("error");
  let smallElement = formControl.querySelector("small")
  smallElement.innerText = msg
}

function showSuccess(element){
  const formControl = element.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}


function checkRequired(elements){
  elements.forEach(function(element){
  if(element.value===""){
    let className = element.className
    if (className==="password2"){
      className = "password"
    }
    showError(element,`${className[0].toUpperCase()}${className.slice(1)} Required`);
  }else{
    showSuccess(element);
  }
  })
}

form.addEventListener('submit',function(e){
  e.preventDefault();   /* to prevent value from vanishing quickly */


  checkRequired([username,email,password,password2])

})
