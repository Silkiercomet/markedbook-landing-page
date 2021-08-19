//FAQ accordion interacion

let drop = document.querySelectorAll(".toggled");
let dropTitle = document.querySelectorAll(".toggler");
let g = document.querySelector('#faq-accordion');
for (let i = 0, len = g.children.length; i < len; i++){

    (function(){
        g.children[i].onclick = function(){
              drop[i].classList.toggle("show");
              
        }       
    })(i);

}

//email 

let btn = document.querySelector(".sign-btn"),
 err1 = document.querySelector('.error'),
 mail = document.querySelector('#email');
    
const emailIsValid = (email) => {
    email = mail.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
    
const fullValidator = () => {


    if(emailIsValid(mail)==false){
        err1.style.display = 'block';
        mail.style.border = '1px solid var(--softRed)'

    }else if(emailIsValid(mail)==true){
        err1.style.display = 'none';
        mail.style.border = 'none'
        alert("we'll be in touch")
    }

    
}
btn.addEventListener('click',fullValidator)