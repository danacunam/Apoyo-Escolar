let hc = document.getElementById('hc');
function hcChange(){
    if ( window.pageYOffset >= hc.offsetTop+100 ) {
        hc.classList.replace('header-fixed-c','header-fixed');
        }else{
         hc.classList.replace('header-fixed','header-fixed-c')
            } 
}
window.addEventListener('scroll', hcChange);