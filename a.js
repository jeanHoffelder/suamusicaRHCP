import './biblioteca';
document.addEventListener("DOMContentLoaded", function(event) {
    
    var dark = document.querySelector('#dark');
var light = document.querySelector('#light');
var cont = document.querySelector('#container');

function Dark(){
    cont.style.color="white"
    cont.style.backgroundColor="black"
    document.body.style.backgroundImage="url('img/wpb.jpg')"
}
function Light(){
    cont.style.color="black"
    cont.style.backgroundColor="white"
    document.body.style.backgroundImage="url('img/wp.jpg')"
}
dark.addEventListener("click", Dark);
light.addEventListener("click", Light);
})