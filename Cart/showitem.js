let item;

const divEl = document.querySelector('.div');

function showItem(e, id) {
  let newid = arguments[1];
  console.log(newid);
  if(newid.startsWith('F')) {
    console.log('id1');
  } else {
    console.log('no');
  }
  
  item = data.find((key) => {
    let keys = Object.keys(key);
    //console.log(keys);
    for (let info of keys) {
      if(key[info] == newid){
        //console.log(key);
        return key;
      }
    }
  });
  console.log(item);
  
  let event = e.target;
  console.log(event);
  console.log(event.dataset);
  console.log(event.hasAttribute('data-num1'));
  
  //console.log(item);
  /*
    display = item.map((x)=> {
      let {src1, abt1, amt1, sell1, award1, src8, abt8, amt8, sell8, award8, src12, abt2, sell2, award2, src3, abt3, amt3, sell3, award3, src4, abt4, amt4, sell4, award4, src5, abt5, amt5, sell5, award5, src6, abt6, amt6, sell6, award6, src7, abt7, amt7, sell7, award7, details1, details2, details3, details4, details5, details6, details7, details8,}=item;
       return `
        <img class="img" src=${src1}>
  <div class="text">
    ${abt1}
  </div>
  <div class="amt">
    ${amt1}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell1}
    </div>
    <div>
      award: ${award1} Integral
    </div>
  </div>
  <div class="details">
    <span class="line"> </span>
    Details
    <span class="line"></span>
  </div>
  
  <div class="about">
    About this item
  </div>
  
  <div class="describtion">
  ${details1}
  </div>
      ` 
    }) */
}
/*
console.log(data);

let array = [
  { id: 'hyu', email: 'a@a.com', password: 123 },
  { id: 'rft', email: 'b@b.com', password: 456 },
  { id: 'ght', email: 'c@c.com', password: 789 },
  { id: 'kui', email: 'd@d.com', password: 679 }
]

let filtered = array.filter(row => row.email === 'a@a.com');

console.log(filtered);

if (filtered.length > 0) { /* mail exists */ 