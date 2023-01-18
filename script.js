var cookies = 0;
var multiplier = 1;
var price = 20;
var autoPrice = 200;
var autoClickVal = 0;
var time = 30;
var bonusPrice = 200;

examMult()
examAuto()
examBonus()

function bakeCookie(){
  cookies += multiplier;
  document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
  examMult()
  examAuto()
  examBonus()
}

function examMult(){
  if (cookies < price) {
  document.getElementById('buttonMult').disabled = true;
  }else if(cookies >= price) {
  document.getElementById('buttonMult').disabled = false;
}
}

function examAuto(){
  if (cookies < autoPrice) {
    document.getElementById('autoClick').disabled = true;
  }else if (cookies >= autoPrice) {
    document.getElementById('autoClick').disabled = false;
  }
}

function examBonus(){
  if (cookies < bonusPrice) {
    document.getElementById('bonusClick').disabled = true;
  }else if (cookies >= bonusPrice) {
    document.getElementById('bonusClick').disabled = false;
  }
}


function hireBaker() {
  if (cookies >= price) {
    if (secondsLeft === 30) {
      multiplier += 1;
    }else if (secondsLeft < 30) {
      multiplier += 2;
    }
    cookies -= price;
    price *= 2;
    document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
    document.getElementById('cookies-number').innerHTML = "Cookies: " + cookies;
    document.getElementById('price').innerHTML = "You need for upgrade your multiplier: " + price;
    examMult()
    examAuto()
    examBonus()
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
    examMult()
    examAuto()
    examBonus()
  }
}

var secondsLeft = 30
var timerOn = false

function bonus2() {
  if (cookies >= bonusPrice) {
    cookies -= bonusPrice;
    multiplier *= 2;
    document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
    // alert('bonus enabled')
    timerOn = true;
    startTimer()
    setTimeout(() => {
      multiplier *= 0.5;
      document.getElementById('multiplier').innerHTML = "Multiplier x: " + multiplier;
      // alert('bonus disabled');
      timerOn = false;
    }, secondsLeft * 1000)
    examMult()
    examAuto()
    examBonus()
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

// multButtom.setAttribute('disabled', true);

//  = function butM(){
//   if (cookies < price) {
//     multButton.setAttribute('disabled', true);
//   }else{
//     multButton.removeAttribute('disabled');
//   }
// }

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
