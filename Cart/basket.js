let basket = JSON.parse(localStorage.getItem('data')) || [];

function increment(id) {
  let selecteditem = id;
  let search = basket.find((x)=> x.id === selecteditem.id);
  if (search === undefined) {
    basket.push({
      id: selecteditem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem('data', JSON.stringify(basket));
  update(selecteditem.id);
  console.log(check);
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
  localStorage.setItem('data', JSON.stringify(basket));
  update(selecteditem.id);
  }

function update(id) {
  let search = basket.find((x)=> x.id === id);
  document.getElementById(id).textContent = search.item;
  calculate();
}


function calculate() {
  let amt = document.getElementById('itemnum');
  amt.textContent = basket.map((x) => x.item).reduce((x,y) => x+y, 0);
}
