let item=[];

const divEl = document.querySelector('.div');

function showItem(e, id) {
  let newid = arguments[1];
  //console.log(newid);
  if(newid.startsWith('F')) {
    //console.log('id1');
  } else {
    //console.log('no');
  }
  
  item.push(data.find((key) => {
    let keys = Object.keys(key);
    //console.log(keys);
    for (let info of keys) {
      if(key[info] == newid){
        //console.log(key);
        return key;
      }
    }
  }));
  console.log(item);
  
  let event = e.target;
  //console.log(event);
  //console.log(event.dataset);
  //console.log(event.hasAttribute('data-num1'));
  
  //window.location.href='item.html';
}
  /*
  display = item.map((x)=> {
      let {src1, abt1, amt1, sell1, award1, src8, abt8, amt8, sell8, award8, src2, amt2, abt2, sell2, award2, src3, abt3, amt3, sell3, award3, src4, abt4, amt4, sell4, award4, src5, abt5, amt5, sell5, award5, src6, abt6, amt6, sell6, award6, src7, abt7, amt7, sell7, award7, details1, details2, details3, details4, details5, details6, details7, details8,}=item;
      if(event.hasAttribute('data-num1')) {
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
      } else if (event.hasAttribute('data-num2')) {
        return `
        <img class="img" src=${src2}>
  <div class="text">
    ${abt2}
  </div>
  <div class="amt">
    ${amt2}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell2}
    </div>
    <div>
      award: ${award2} Integral
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
  ${details2}
  </div>
      ` 
      } else if (event.hasAttribute('data-num3')) {
        return `
        <img class="img" src=${src3}>
  <div class="text">
    ${abt3}
  </div>
  <div class="amt">
    ${amt3}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell3}
    </div>
    <div>
      award: ${award3} Integral
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
  ${details3}
  </div>
      ` 
      } else if (event.hasAttribute('data-num4')) {
        return `
        <img class="img" src=${src4}>
  <div class="text">
    ${abt4}
  </div>
  <div class="amt">
    ${amt4}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell4}
    </div>
    <div>
      award: ${award4} Integral
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
  ${details4}
  </div>
      ` 
      } else if (event.hasAttribute('data-num5')) {
        return `
        <img class="img" src=${src5}>
  <div class="text">
    ${abt5}
  </div>
  <div class="amt">
    ${amt5}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell5}
    </div>
    <div>
      award: ${award5} Integral
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
  ${details5}
  </div>
      ` 
      } else if (event.hasAttribute('data-num6')) {
        return `
        <img class="img" src=${src6}>
  <div class="text">
    ${abt6}
  </div>
  <div class="amt">
    ${amt6}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell6}
    </div>
    <div>
      award: ${award6} Integral
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
  ${details6}
  </div>
      ` 
      } else if (event.hasAttribute('data-num7')) {
        return `
        <img class="img" src=${src7}>
  <div class="text">
    ${abt7}
  </div>
  <div class="amt">
    ${amt7}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell7}
    </div>
    <div>
      award: ${award7} Integral
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
  ${details7}
  </div>
      ` 
      } else if (event.hasAttribute('data-num8')) {
        return `
        <img class="img" src=${src8}>
  <div class="text">
    ${abt8}
  </div>
  <div class="amt">
    ${amt8}
  </div>
  <div class="grid">
    <div>
      freight: Free shipping
    </div>
    <div>
      sell hot cakes: ${sell8}
    </div>
    <div>
      award: ${award8} Integral
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
  ${details8}
  </div>
      ` 
      }
  })
  display = display.join('');
  window.location.href = 'item.html';
  divEl.innerHTML = display;
} */

