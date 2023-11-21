const data = [
  {
    href: "",
    cls: "out",
    id: "recharge",
    img: "/Images/Recharge.png",
    content: "Recharge now",
  },

  {
    href:"",
    cls: "out",
    id: "withdrawl",
    img: "/Images/Withdraw.png",
    content: "Quick Withdraw",
  },

  {
    href: "",
    cls: "out",
    id: "Service",
    img: "/Images/Service.png",
    content: "Customer Service",
  },

  {
    href: "Inviteclone.html",
    cls: "out",
    id: "invite",
    img: "/Images/Invite.png",
    content: "Invite Friends",
  },
];


const data1 = [
  {
    id: "btn1",
    href: "Order.html",
    src: "/Images/Amazoncart.png",
    content: "over &#36;100 &#124; 0.3% &#124; 45 product <br> <span> Silver member </span>"
  },

  {
    id: "btn2",
    href: "",
    src: "/Images/eBaycart.jpeg",
    content: "over &#36;50&#44;000 &#124; 0.3% &#124; 55 product <br> <span> Gold member </span>"
  },

  {
    id: "btn3",
    href: "",
    src: "/Images/Newegg.jpeg",
    content: "over &#36;80&#44;000 &#124; 0.3% &#124; 65 product <br> <span> Platinum member </span>"
  },

  {
    id: "btn4",
    href: "",
    src: "/Images/Walmartcart.jpeg",
    content: "over &#36;500&#44;000 &#124; 0.3% &#124; 85 product <br><span> Diamond member </span>",
  },
];

const data2 = [
  {
    href: "#",
    cls: "fa fa-shopping-bag",
    content: "Grab"
  },

  {
    href: "/Page5.html",
    cls: "fa fa-tasks",
    content: "Task"
  },

  {
    href: "Page2.html",
    cls: "fa fa-home",
    content: "Home"
  },

  {
    href: "/Page3.html",
    cls: "fa fa-credit-card-alt",
    content: "recharge"
  },

  {
    href: "/Page4.html",
    cls: "fa fa-user-circle",
    content: "Mine"
  }
];

const member = [
  {
    pic: '/Images/man1.jpg',
    num: '474***3728',
    amt: '&#36;12&#46;37',
  },

  {
    pic: '/Images/man3.jpg',
    num: '396***1974',
    amt: '&#36;1034&#46;02',
  },

  {
    pic: '/Images/man6.jpg',
    num: '774***2864',
    amt: '&#36;345&#46;78',
  },


  {
    pic: '/Images/man.jpg',
    num: '638***5398',
    amt: '&#36;72&#46;46',
  },

  {
    pic: '/Images/man2.jpg',
    num: '923***7278',
    amt: '&#36;22&#46;27',
  },

  {
    pic: '/Images/man4.jpg',
    num: '927***5638',
    amt: '&#36;10&#46;00',
  },

  {
    pic: '/Images/man7.jpg',
    num: '939***1865',
    amt: '&#36;17&#46;80',
  },

  {
    pic: '/Images/man9.jpg',
    num: '343***5338',
    amt: '&#36;1370&#46;52',
  },
  ];

const info = [{
    link: 'Introduction.html',
    img: '/Images/Img1.png',
    text: 'Introduction of the platform'
  },
  {
    link: 'Agency.html',
    img: '/Images/Img2.png',
    text: 'Agency cooperation'

  },
  {
    link: 'Rule.html',
    img: '/Images/Img3.png',
    text: 'Rule description'

  },
  {
    link: '',
    img: '/Images/Img4.png',
    text: 'company qualification'

  }];

const sponsor = ['/Images/Amazon.jpg', '/Images/eBay.jpg', '/Images/Newegg.jpeg'];


const gridEl = document.querySelector('.grid');

const grid1El = document.querySelector('.grid1');

const grid2El = document.querySelector('.grid2');

const lastEl = document.querySelector('.last');

const pixEl = document.querySelector('#img');

let index = 0;

function change() {
  pixEl.src = sponsor[index];
  index++;
  if(index == sponsor.length) index=0;
}

setInterval(change, 1500);



window.addEventListener('DOMContentLoaded', function() {
  displayGridEl(data);
  displayTask(data1);
  displayMember(member);
  displayInfo(info);
});

function displayGridEl(arr) {
  let display = arr.map(function(item) {
    return `<a href=${item.href}>
    <div class = ${item.cls}>
      <button class = ${item.id}>
        <img id=${item.id} class="pic" src=${item.img} alt="x"> ${item.content}
      </button>
    </div>
    </a>`;
  })
  display = display.join("");
  gridEl.innerHTML = display;
};

function displayTask(arr) {
  let display = arr.map((item) => {
    return `
    <button id=${item.id}> <a href=${item.href}>  <img class="images" src=${item.src}>
      <p class="p">
      ${item.content}
      </p> </a>
    </button>
    `
  })
  display = display.join(""),
    grid1El.innerHTML = display;
}

function displayMember(arr) {
  let display = arr.map(item => {
    return `
    <div class="grid3">
        <div class="picture">
          <img class="man1" src=${item.pic} alt="x">
        </div>
        <div class="text">
          ${item.num} <br> <span class="span"> ${item.amt} </span>
        </div>
      </div>
    `
  })
  display = display.join('');
  grid2El.innerHTML = display;
}

function displayInfo(arr) {
  let display = arr.map(item => {
    //let [link, img, text] = item;
    return `
      <button class="company">
      <a href=${item.link}>
        <div class="grd1">
          <div class="img1"><img class="png" src=${item.img} alt="x"></div>
          <div class="text1">${item.text}</div>
        </div>
      </a>
    </button>
      `
  })
  display = display.join('');
  lastEl.innerHTML = display;
}