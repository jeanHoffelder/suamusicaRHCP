const TRHCP = [
  "True Men Don't Kill Coyotes",
  "Baby Appeal",
  "Buckle Down",
  "Get Up And Jump",
  "Why Don't You Love Me",
  "Green Heaven",
  "Mommy Where's Daddy",
  "Out In L.A.",
  "Police Helicopter",
  "You Always Sing The Same",
  "Grand Pappy Du Plenty",

  "Hollywood (Africa)",
  "American Ghost Dance",
  "If You Want Me To Stay",
  "Nevermind",
  "Freaky Styley",
  "Blackeyed Blonde",
  "The Brothers Cup",
  "Battle Ship",
  "Lovin' And Touchin'",
  "Catholic School Girls Rule",
  "Sex Rap",
  "Thirty Dirty Birds",
  "Yertle The Turtle",
  "Nevermind",
  "Sex Rap",
  "Millionaires Against Hunger",

  
]
const mode = document.getElementById('mode')
mode.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})


const btn = document.querySelector('#revela')



const nao = ("O NÚMERO DO DIA DEVE ESTAR ENTRE 1 E 31")
var result = document.getElementById("musica");


btn.addEventListener("click" , function() {
  const dia = document.querySelector('#dia');
  const numdia = dia.value;
  
  if(numdia>31,  numdia<1){
    result.innerHTML=(nao);
  }else{ 
    const select = document.getElementById('mes').value;
    var numusica = select * numdia
    result.innerHTML=(TRHCP[numusica]);


  
  }
  
})