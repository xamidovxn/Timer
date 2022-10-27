let elForm = document.querySelector('.form')
let elHour = document.querySelector('.hour')
let elMinute = document.querySelector('.minute')
let elSecond = document.querySelector('.second')
let elbtn = document.querySelector('.btn')
let elbtn_refresh = document.querySelector('.btn_refresh')

elbtn_refresh.style.display = 'none'

let elSoat = document.querySelector('.soat')
let elDaqiqa = document.querySelector('.daqiqa')
let elSoniya = document.querySelector('.soniya')

elForm.addEventListener('submit', function (e) {
   e.preventDefault();

   let soat = Number(elHour.value);
   let daqiqa = Number(elMinute.value);
   let soniya = Number(elSecond.value);
   let allSecond = soat * 3600 + daqiqa * 60 + soniya

   interval = setInterval(() => {
      calc(allSecond)
      allSecond--
   }, 1000);

   elbtn.style.display = 'none'
   elbtn_refresh.style.display = 'inline-block'
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




