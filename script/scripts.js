


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


