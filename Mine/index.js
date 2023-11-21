let btnEl1 = document.getElementById('btn1');
let btnEl2 = document.getElementById('btn2');
let btnEl3 = document.getElementById('btn3');
let btnEl4 = document.getElementById('btn4');
let btnEl5 = document.getElementById('btn5');
let btnEl6 = document.getElementById('btn6');
let btnEl7 = document.getElementById('btn7');

let arr = [btnEl1, btnEl2, btnEl3, btnEl4, btnEl5, btnEl6, btnEl7]
function change () {
  let grabEl = document.getElementById('grab');
  let taskEl = document.getElementById('task');
  let homeEl = document.getElementById('home');
  let rechargeEl = document.getElementById('recharge');
  let mineEl = document.getElementById('mine');
  
  if (homeEl) {
    document.homeEl.style.background = "red";
    document.homeEl.style.Color= "red";
  }
  else if(taskEl) {
    document.grabEl.background = 'red';
    document.grabEl.color = 'red'
  }
  else if(rechargeEl) {
    document.rechargeEl.background = 'red';
    document.rechargeEl.color = 'red';
  }
  else if(mineEl) {
    document.mineEl.background = 'red';
    document.mineEl.color = 'red';
  }
}   