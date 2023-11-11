const basedEl = document.querySelector('.based');

function displayItems(arr) {
  let display = arr.map((item)=>{
    let {heading, id1, link1, src1, desc1, amt1, id2, link2, src2, desc2, amt2, id3, link3, src3, desc3,
      amt3, id4, link4, src4, desc4, amt4, id5, link5, src5, desc5, amt5, id6, link6, src6, desc6, amt6, id7, link7, src7, desc7,
      amt7, id8, link8, src8, desc8, amt8,} = item;
      
    if (item.src2 == undefined) {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
          
            <div onclick='showItem(${id1})' id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
          
    </div>
      `
    } else if(item.src3 == undefined) {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
    </div>
      `
    }
    
    else if (item.src4 == undefined) {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
            <div id=${id3} class="wb">
              <img class="img" src=${src3} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc3}
                </p>
                <p class="secondp">
                  ${amt3}
                </p>
              </div>
            </div>
          
    </div>
      `
    }else if (item.src5 == undefined) {
    return `
    <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
            <div id=${id3} class="wb">
              <img class="img" src=${src3} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc3}
                </p>
                <p class="secondp">
                  ${amt3}
                </p>
              </div>
            </div>
            <div id=${id4} class="wb">
              <img class="img" src=${src4} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc4}
                </p>
                <p class="secondp">
                  ${amt4}
                </p>
              </div>
            </div>
    </div>
    `}
    else if (item.src6 == undefined) {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
            <div id=${id3} class="wb">
              <img class="img" src=${src3} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc3}
                </p>
                <p class="secondp">
                  ${amt3}
                </p>
              </div>
            </div>
            <div id=${id4} class="wb">
              <img class="img" src=${src4} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc4}
                </p>
                <p class="secondp">
                  ${amt4}
                </p>
              </div>
            </div>
            <div id=${id5} class="wb">
              <img class="img" src=${src4} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc5}
                </p>
                <p class="secondp">
                  ${amt5}
                </p>
              </div>
            </div>
    </div>
      `
    } else if (item.src7 == undefined) {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
            <div id=${id3} class="wb">
              <img class="img" src=${src3} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc3}
                </p>
                <p class="secondp">
                  ${amt3}
                </p>
              </div>
            </div>
            <div id=${id4} class="wb">
              <img class="img" src=${src4} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc4}
                </p>
                <p class="secondp">
                  ${amt4}
                </p>
              </div>
            </div>
            <div id=${id5} class="wb">
              <img class="img" src=${src5} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc5}
                </p>
                <p class="secondp">
                  ${amt5}
                </p>
              </div>
            </div>
            <div id=${id6} class="wb">
              <img class="img" src=${src6} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc6}
                </p>
                <p class="secondp">
                  ${amt6}
                </p>
              </div>
            </div>
    </div>

      `
    } else if (item.src8 == undefined) {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
            <div id=${id3} class="wb">
              <img class="img" src=${src3} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc3}
                </p>
                <p class="secondp">
                  ${amt3}
                </p>
              </div>
            </div>
            <div id=${id4} class="wb">
              <img class="img" src=${src4} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc4}
                </p>
                <p class="secondp">
                  ${amt4}
                </p>
              </div>
            </div>
            <div id=${id5} class="wb">
              <img class="img" src=${src5} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc5}
                </p>
                <p class="secondp">
                  ${amt5}
                </p>
              </div>
            </div>
            <div id=${id6} class="wb">
              <img class="img" src=${src6} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc6}
                </p>
                <p class="secondp">
                  ${amt6}
                </p>
              </div>
            </div>
            <div id=${id7} class="wb">
              <img class="img" src=${src7} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc7}
                </p>
                <p class="secondp">
                  ${amt7}
                </p>
              </div>
            </div>
    </div>

      `
    } else {
      return `
      <div class="digital">
      <span style=" 
       height: em;
       margin-right: 0.8em;
       margin-left: 1.5em;
       padding: 0em;
       background: red;
       width: 0.3em;
       color: red;
       border: solid red 0.12em;
       
       "> </span> ${heading}
        </div>
        <div class="productbox">
            <div id=${id1} class="wb">
              <img class="img" src=${src1} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc1}
                </p>
                <p class="secondp">
                  ${amt1}
                </p>
              </div>
            </div>
            <div id=${id2} class="wb">
              <img class="img" src=${src2} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc2}
                </p>
                <p class="secondp">
                  ${amt2}
                </p>
              </div>
            </div>
            <div id=${id3} class="wb">
              <img class="img" src=${src3} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc3}
                </p>
                <p class="secondp">
                  ${amt3}
                </p>
              </div>
            </div>
            <div id=${id4} class="wb">
              <img class="img" src=${src4} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc4}
                </p>
                <p class="secondp">
                  ${amt4}
                </p>
              </div>
            </div>
            <div id=${id5} class="wb">
              <img class="img" src=${src5} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc5}
                </p>
                <p class="secondp">
                  ${amt5}
                </p>
              </div>
            </div>
            <div id=${id6} class="wb">
              <img class="img" src=${src6} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc6}
                </p>
                <p class="secondp">
                  ${amt6}
                </p>
              </div>
            </div>
            <div id=${id7} class="wb">
              <img class="img" src=${src7} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc7}
                </p>
                <p class="secondp">
                  ${amt7}
                </p>
              </div>
            </div>
            <div id=${id8} class="wb">
              <img class="img" src=${src8} alt="x">
              <div class="textcontainer">
                <p class="firstp">
                  ${desc8}
                </p>
                <p class="secondp">
                  ${amt8}
                </p>
              </div>
            </div>
    </div>
      `
    }
  })
  display = display.join('');
  basedEl.innerHTML = display;
}

displayItems(data);

//console.log(basedEl);