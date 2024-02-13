const loginBtn=document.querySelector("#login-btn");
const registerBtn=document.querySelector("#register-btn");
const registerIconBtn=document.querySelector("#register-icon-btn");
const loginIconBtn=document.querySelector("#login-icon-btn");

const loginForm=document.querySelector(".login-container");
const registerForm=document.querySelector(".register-container");

const fluid=document.querySelector("#fluid");

function viewLogin(){
    loginForm.style.left=0;
    registerForm.style.left="100%";
    loginForm.style.opacity=1;
    registerForm.style.opacity=0;
    fluid.classList.add("fluid-animate");
}
function viewRegister(){
    loginForm.style.left="-100%";
    registerForm.style.left="0";
    loginForm.style.opacity=0;
    registerForm.style.opacity=1;
    fluid.classList.add("fluid-animate");
}
registerBtn.addEventListener("click",viewRegister);
loginBtn.addEventListener("click",viewLogin);

registerIconBtn.addEventListener("click",viewRegister);
loginIconBtn.addEventListener("click",viewLogin);

fluid.addEventListener('animationend',()=>{
    fluid.classList.remove("fluid-animate");
});


// ====Form Validation ====== 
const form = document.getElementById('form');
const email=document.getElementById('email');
const regEmail=document.getElementById('reg-email');
const password=document.getElementById('password');
const regPassword=document.getElementById('reg-password');
const user=document.getElementById('user');
const submit=document.querySelectorAll(".input-submit");
