let basket = JSON.parse(localStorage.getItem('data')) || [];

let topdiv = document.getElementById('topdiv');

let itemdiv = document.getElementById('itemdiv');

let itemnum = document.getElementById('itemnum');

let totalEl = document.getElementById('totaldiv');

let commision = 0;

function generateCart() {
  if(basket.length !== 0) {
    topdiv.innerHTML = `
     <div id='totaldiv' class="box">
      Total Bill : $ 1000
    </div>
    <div class="container">
      <button onclick='checkOut()' class="checkout">
        Checkout
      </button>
      <button onclick='clearcart()' class="clear">
        Clear Cart
      </button>
    </div>
    `
    let display = basket.map((x) => {
      let {amt, id, item, name, src, num, numid} = x;
      let newamt = amt.substring(1);
      
      let result = ((newamt*1000) * item)/1000;
      return `
      <div class="stuff">
      <div class="img">
        <img class="pic" src=${src} alt="x">
      </div>
      <div class="data">
        <div class="row1">
          <div class="name"> ${name} <span class="price"> ${amt} </span></div>
        </div>
        <div class="row2">
          <button onclick='decrement(${numid})' class="x y minus"> &ndash; </button>
          <div id=${numid} class="x z number">${item}</div>
          <button onclick='increment(${numid},  "${amt}", "${src}",  "${name}", "${numid}" )' class="x y plus"> + </button>
        </div>
        <h3 class="row3">
          $ ${result}
        </h3>
      </div>
      <button id='' onclick='cancel(${numid})' class="p">x</button>
    </div>
      `
    })
    display = display.join('');
    itemdiv.innerHTML = display;
  } else {
    topdiv.innerHTML = `
     <div class="empty">
      <h2>
        Cart is Empty
      </h2>
      <a href="index.html">
        <button class="homebtn">Back to Home</button>
      </a>
    </div>
    `
    itemdiv.innerHTML = ``;
      }
}



function calculate() {
  let amt = document.getElementById('itemnum');
  sum = basket.map((x) => x.item ).reduce((x,y) => x+y, 0);
  localStorage.setItem('sum', JSON.stringify(sum));
  amt.textContent = JSON.parse(localStorage.getItem('sum'));
  
}

window.addEventListener('DOMContentLoaded', function() {
  generateCart();
  calculate();
  sumAmt();
} );

function increment(id, price, src, name, numid) {
  let selecteditem = id;
  let search = basket.find((x)=> x.id === selecteditem.id);
  if (search === undefined) {
    basket.push({
      id: selecteditem.id,
      amt: price,
      name,
      src,
      item: 1,
      numid
    });
  } else {
    search.item += 1;
  }
  update(selecteditem.id);
  generateCart();
  sumAmt();
  localStorage.setItem('data', JSON.stringify(basket));
}

function decrement(id) {
  let selecteditem = id;
  let search = basket.find((x)=> x.id === selecteditem.id);
  if (search === undefined) {
    return;
  }else if(search.item == 0) {
    return;
  }else {
    search.item -= 1;
  }
  update(selecteditem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCart();
  sumAmt();
  localStorage.setItem('data', JSON.stringify(basket));
  }

function update(id) {
  let search = basket.find((x)=> x.id === id);
  document.getElementById(id).textContent = search.item;
  calculate();
}

function cancel(y) {
  let selecteditem = y.id;
  //search basket for item having the same id
  let search = basket.find((x)=> x.id === selecteditem);
  search.item = 0;
  update(selecteditem);
  basket = basket.filter((x) => x.item !== 0);
  generateCart();
  localStorage.setItem('data', JSON.stringify(basket));
}

function clearcart() {
  basket.map((x) => {
    x.item = 0;
  })
  itemnum.textContent = 0;
  basket = basket.filter((x) => x.item !== 0);
  generateCart();
  localStorage.setItem('data', JSON.stringify(basket));

}

function checkOut() {
  sumAmt();
}

function sumAmt() {
  let sum = basket.map((x) => {
    let totaldiv = document.getElementById('totaldiv');
    let {amt, id, item, name, src, num, numid} = x;
      let newamt = amt.substring(1);
      
      let result = ((newamt*1000) * item)/1000;
      
    return result;
  });
  let p = sum.reduce((y, z) => y+z, 0);
  let totalSum = p.toFixed(1);
  totaldiv.textContent = `Total Bill : $ ${totalSum}`;
}


//console.log(basket);



