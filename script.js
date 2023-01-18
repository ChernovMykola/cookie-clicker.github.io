var cookies = 0;
var cpc = 1;
var multiplier = 1;
var price = 20;
var autoPrice = 200;
var autoClickVal = 0;
var time = 30;
var bonusPrice = 200;
var multButton = document.querySelector('#buttonMult');

multButton.setAttribute('disabled', true);

cookies.value = function butM(){
  if (cookies < price) {
    multButtom.setAttribute('disabled', true);
  }else{
    multButtom.removeAttribute('disabled');
  }
}
function bakeCookie(){
  cookies += cpc;
  document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
}

function hireBaker() {
  if (cookies >= price) {
    if (secondsLeft === 30) {
      cpc += 1;
      multiplier += 1;
    }else if (secondsLeft < 30) {
      cpc += 2;
      multiplier += 2;
    }
    cookies -= price;

    price *= 2;
    document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
    document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
    document.getElementById('price').innerHTML = "You need for upgrade your multiplier: " + price;
  }else {
    alert('You need more cookies')
  }
}

function bakeCookieAuto() {
  cookies += autoClickVal;
  document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
}

setInterval(bakeCookieAuto, 1000)

function autoCookie(){
  if (cookies >= autoPrice) {
    cookies -= autoPrice;
    autoPrice *= 1.5;
    autoClickVal += 1;
    document.getElementById('autoPrice').innerHTML = "You need for buy auto-cliker: " + autoPrice;
  }else {
    alert('You need more cookies')
  }
}

var secondsLeft = 30
var timerOn = false

function bonus2() {
  if (cookies >= bonusPrice) {
    cookies -= bonusPrice;
    multiplier *= 2;
    cpc *= 2;
    document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
    alert('bonus enabled')
    timerOn = true;
    startTimer()
    setTimeout(() => {
      multiplier *= 0.5;
      cpc *= 0.5;
      document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
      alert('bonus disabled');
      timerOn = false;
    }, secondsLeft * 1000)
  }else {
    alert('You need more cookies')
  }
  }


function startTimer() {
    refreshIntervalId = setInterval(
        function () {
          if (secondsLeft >= 0) {
            secondsLeft -= 1
          }
          if (secondsLeft === 0) {
             secondsLeft = 30;
             clearInterval(refreshIntervalId);
          }
          document.getElementById('timerCounter').innerHTML = secondsLeft
      }, 1000);
}

multButtom.setAttribute('disabled', true);

cookies.value = function butM(){
  if (cookies < price) {
    multButton.setAttribute('disabled', true);
  }else{
    multButton.removeAttribute('disabled');
  }
}

// function bonus2() {
//   multiplier *= 2;
//   cpc *= 2;
//   alert('bonus enabled')
//   document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
//   setTimeout(() => {
//     multiplier *= 0.5;
//     cpc *= 0.5;
//     alert('bonus disabled');
//     document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
//   }, 30000)
// }

// function bonus(){
//   bonusOn = true;
//   multiplier *= 2;
//   cpc *= 2;
// }
//
// function disableBonus(){
//   bonusOn = false;
//   multiplier *= 0.5;
//   cpc *= 0.5;
//   time = 30;
// }
//
// if (bonusOn) {
//   time--;
// }else if (time === 0) {
//   disableBonus()
// }


// function bonuS(){
//   bonus_kf = 2;
//   multiplier *= bonus_kf;
//   cpc *= bonus_kf;
//   setTimeout(10000);
//   bonus_kf = 1;
//   multiplier *= 0.5;
//   cpc *= 0.5;
//   document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
// }
//
//
//



// var waittime = setInterval(timer, 1000)
//
// function timer(){
//   time -= 1;
//   document.getElementById('timer').innerHTML = "You have: " + time + "s";
//   if (time <= 0) {
//     multiplier /= 2;
//     time = 30;
//     clearInterval(waittime);
//   }
// }
//
// function bonus(){
//   if (cookies >= bonusPrice) {
//     multiplier *= 2;
//     cookies -= bonusPrice;
//     document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
//     document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
//   }else {
//     alert('You need more cookies')
//   }
// }
//
// document.getElementById('timer').innerHTML ="You have: " + time + "c";
// time -= 1;
//
// if (time < 0 ) {
//   clearInterval(bonus)
//   time = 31;
// }else {
//   setInterval(bonus, 1000)
