// Events

const btn = document.querySelector('#changeColor');
const btn1 = document.querySelector('#resetColor');
const btn2 = document.querySelector('#onfocusBtn');
const btn3 = document.querySelector('#ondblclick');
const btn4 = document.querySelector('#onmouceover');
const btn5 = document.querySelector('#onmouceout');

function random(number){
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn1.onclick = function(){
  const rndCol = 'rgb(255,255,255)';
  document.body.style.backgroundColor = rndCol;
}

btn2.onfocus = function(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn3.ondblclick = function(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn4.onmousemove = function(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn5.onmouseout= function(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('#text');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}