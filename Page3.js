const amountEl = document.getElementById("amount");
function appear(button) {
  let btnEl = document.getElementsByClassName("btn");
  let value = button.value
  amountEl.value = value;
  console.log('hey')
}

let; inputBox = document.getElementById('amount');

inputBox.addEventListener('input', function() {
  let value = inputBox.value;
  if (value.charAt(0) !== "$") {
    inputBox.value = "$" + value;
  }
});

function pop_up() {
  window.alert('pls fund your account to proceed')
}