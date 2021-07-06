


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
let navBtn = document.getElementsByClassName("nav-link");
let ccount = 0;

function openNav() {
    ccount=ccount+1
    if(ccount<=1){
    openButton.classList.replace('btn-movil-o-active','btn-movil-o');
    navContent.classList.add('mobile-nav-active');
    closeButton.classList.replace('btn-movil-c','btn-movil-c-active');

  }
  else{
    openButton.classList.replace('btn-movil-o-active','btn-movil-o');
    navContent.classList.replace('mobile-nav-inactive','mobile-nav-active');
    closeButton.classList.replace('btn-movil-c','btn-movil-c-active');
 
   }
  }
  
  function closeNav() {
    
    navContent.classList.replace('mobile-nav-active','mobile-nav-inactive');
    openButton.classList.replace('btn-movil-o','btn-movil-o-active');
    closeButton.classList.replace('btn-movil-c-active','btn-movil-c');

    
  }
 
