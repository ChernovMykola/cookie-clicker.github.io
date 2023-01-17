var cookies = 0;
var cpc = 1;
var multiplier = 1;
var price = 20;
var autoPrice = 200;
var autoClickVal = 0;
var time = 30;
var bonusPrice = 20;
var bonus_kf = 1;

function bakeCookie(){
  cookies += cpc;
  document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
}

function hireBaker() {
  if (cookies >= price) {
    cpc += 1;
    cookies -= price;
    multiplier += 1;
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

function bonus(){
  bonusOn = true;
  multiplier *= 2;
  cpc *= 2;
}

function disableBonus(){
  bonusOn = false;
  multiplier *= 0.5;
  cpc *= 0.5;
  time = 30;
}

if (bonusOn) {
  time--;
}else if (time === 0) {
  disableBonus()
}


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
