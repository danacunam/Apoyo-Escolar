


let header = document.getElementById('header');


 
// HEADER 

function headerChange() {
    if (window.pageYOffset >= header.offsetTop+100 ) {
        header.classList.replace('header-init','header-fixed');
       
        }else{
            header.classList.replace('header-fixed','header-init');
        
            } 
    }


window.addEventListener('scroll', headerChange);

//
let navContent = document.getElementById("navMovil");
let openButton = document.getElementById("open-btn");
let closeButton = document.getElementById("close-btn");

function openNav() {
    navContent.classList.add('mobile-nav-inactive');
    navContent.classList.replace('mobile-nav-inactive','mobile-nav-active');
    openButton.classList.replace('btn-movil-o-active','btn-movil-o');
    closeButton.classList.replace('btn-movil-c','btn-movil-c-active');
  }
  
  function closeNav() {
    navContent.classList.replace('mobile-nav-active','mobile-nav-inactive');
    openButton.classList.replace('btn-movil-o','btn-movil-o-active');
    closeButton.classList.replace('btn-movil-c-active','btn-movil-c');
    
  }
