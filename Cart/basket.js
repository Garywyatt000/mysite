let basket = JSON.parse(localStorage.getItem('data')) || [];

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
      numid: numid
    });
  } else {
    search.item += 1;
  }
  update(selecteditem.id);
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
  localStorage.setItem('data', JSON.stringify(basket));
  }

function update(id) {
  let search = basket.find((x)=> x.id === id);
  document.getElementById(id).textContent = search.item;
  calculate();
}


function calculate() {
  let amt = document.getElementById('itemnum');
  sum = basket.map((x) => x.item ).reduce((x,y) => x+y, 0);
  localStorage.setItem('sum', JSON.stringify(sum));
  amt.textContent = JSON.parse(localStorage.getItem('sum'));
}

window.addEventListener('DOMContentLoaded', calculate());

