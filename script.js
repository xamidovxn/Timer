let elForm = document.querySelector('.form')
let elHour = document.querySelector('.hour')
let elMinute = document.querySelector('.minute')
let elSecond = document.querySelector('.second')
let elbtn = document.querySelector('.btn')
let elbtn_refresh = document.querySelector('.btn_refresh')
let elbtn_pause = document.querySelector('.btn_pause')
let elbtn_continue = document.querySelector('.btn_continue')
let elmusic = new Audio('Timer.mp3')

elbtn_refresh.style.display = 'none';
elbtn_pause.style.display = 'none';
elbtn_continue.style.display = 'none';

let elSoat = document.querySelector('.soat')
let elDaqiqa = document.querySelector('.daqiqa')
let elSoniya = document.querySelector('.soniya')

elForm.addEventListener('submit', function (e) {
   e.preventDefault();

   let soat = Number(elHour.value);
   let daqiqa = Number(elMinute.value);
   let soniya = Number(elSecond.value);
   let allSecond = soat * 3600 + daqiqa * 60 + soniya

   let interval = setInterval(() => {

      if (allSecond <= 0) {
         clearInterval(interval)
         interval = null
         elbtn_pause.style.display='none'
         elmusic.play();
      }
      
      calc(allSecond)
      allSecond--
   }, 1000);

   elbtn.style.display = 'none'
   elbtn_refresh.style.display = 'block'
   elbtn_pause.style.display = 'block'


   elbtn_pause.addEventListener('click', function (e) {
      e.preventDefault();
      clearInterval(interval)
      interval = null
      elbtn_pause.style.display = 'none'
      elbtn_continue.style.display = 'block'
   }),

      elbtn_continue.addEventListener('click', function (e) {
         e.preventDefault();
         clearInterval(interval)
         interval = allSecond
         elbtn_continue.style.display = 'none'
         elbtn_pause.style.display = 'block'
      })

   elbtn_refresh.addEventListener('click', function (e) {
      e.preventDefault();
      location.reload();
      elbtn_refresh.style.display = 'none'
      elbtn_pause.style.display = 'none'
      elbtn.style.display = 'block'
   })

})


function calc(seconds) {
   let hour = Math.floor(seconds / 3600);
   seconds = seconds - hour * 3600
   let minute = Math.floor(seconds / 60)
   seconds = seconds - minute * 60;

   elSoat.textContent = hour
   elDaqiqa.textContent = minute
   elSoniya.textContent = seconds
}




