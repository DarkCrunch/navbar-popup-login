const modalContainer = document.querySelector(".modal-container"),
  modalLogin = document.getElementById("modalLogin"),
  Create = document.getElementById("create"),
  loginHere = document.getElementById("loginHere"),
  loginForm = document.querySelector(".login"),
  registrationForm = document.querySelector(".registration")

modalLogin.onclick = () => {
  modalContainer.classList.add("open");
};

function closeModalContainer(){
  modalContainer.classList.remove("open");
}

Create.onclick =()=> {
  loginForm.setAttribute("style", "transform: translate(-500px);");
  registrationForm.setAttribute("style","transform: translate(0);");
};

loginHere.onclick =()=> {
  loginForm.removeAttribute("style");
  registrationForm.removeAttribute("style");
};