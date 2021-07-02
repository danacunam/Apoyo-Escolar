


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


// SLIDE

let slideIndex = 0;


// showDivs();

 carousel();

function carousel() {
  let x = document.getElementsByClassName("slides");
  let y = document.getElementsByClassName("slide-btn");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    y[i].classList.remove('active');

 
  }
  slideIndex++;

  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].classList.add('active');
  
  setTimeout(carousel, 5000); 
  }



// function currentDiv(n) {
//     showDivs(slideIndex = n);
//   }
  
//   function showDivs(n) {
//     let i;
//     let x = document.getElementsByClassName("slides");
//     let dots = document.getElementsByClassName("slide-btn");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" w3-white", "");
//     }
//     x[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " w3-white";
//   }
