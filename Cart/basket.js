let basket = [];

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
  update(selecteditem.id);
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
  }

function update(id) {
  let search = basket.find((x)=> x.id === id);
  document.getElementById(id).textContent = search.item;
  calculate();
}


function calculate() {
  let y = basket.map((x)=> {
    (x.item);
  }).reduce((x,y)=> { x+y, 0})
  document.getElementById('itemnum').textContent = y;
}