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
 mail = document.querySelector('#email'),
 errImg = document.querySelector('#error-img');
    
const emailIsValid = (email) => {
    email = mail.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
    
const fullValidator = () => {


    if(emailIsValid(mail)==false){
        err1.style.display = 'block';
        errImg.style.display = 'block'
        mail.style.border = '1px solid var(--softRed)'

    }else if(emailIsValid(mail)==true){
        err1.style.display = 'none';
        mail.style.border = 'none'
        errImg.style.display = 'none'
        alert("we'll be in touch")
    }

    
}
btn.addEventListener('click',fullValidator)

//details section
let tab = document.querySelectorAll('.tab')
let header = document.querySelector('.detail-h1')
let paragraph = document.querySelector('.detail-p')
console.log(tab[1])

const cleanBorder = () => {
    for(let i = 0; i < tab.length; i++){
        tab[i].style.borderBottom = 'none';
    }
}

tab[1].addEventListener('click', function() {
    cleanBorder()
    tab[1].style.borderBottom = '3px solid var(--softRed)'
    header.textContent = 'Intelligent search';
    paragraph.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
})
tab[2].addEventListener('click', function() {
    cleanBorder()
    tab[2].style.borderBottom = '3px solid var(--softRed)'
    header.textContent = 'Share your bookmarks';
    paragraph.textContent = '    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.    '
})
tab[0].addEventListener('click', function() {
    cleanBorder()
    tab[0].style.borderBottom = '3px solid var(--softRed)'
    header.textContent = 'Bookmark in one click';
    paragraph.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
})
