
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


form.addEventListener('submit',function(e){
  e.preventDefault();   /* to prevent value from vanishing quickly */
  if(username.value === ""){
    showError(username,"Username Required")
  }else{
      showSuccess(username);
  }

  if(email.value === ""){
    showError(email,"Email Required");
  }else if(!validateEmail(email.value)){
      showError(email,"Enter Valid Email")
  } else {
    showSuccess(email);
  }

  if(password.value === ""){
    showError(password,"Password Required")
  }else{
      showSuccess(password);
  }


  if(password2.value===""){
      showError(password2,"Invalid");
  }else if(password2.value === password.value){
    showSuccess(password2);

  }else if(password2.value === password.value){
    showError(password2,"Password didn't match");
  }



})
