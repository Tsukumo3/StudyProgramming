const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++){
  const newImage = document.createElement('img');
  let imgName = "images/pic" + i + ".jpg"
  newImage.setAttribute('src', imgName);
  thumbBar.appendChild(newImage);
  /*
  newImage.onclick = function(event) {
    displayedImage.src = event.target.src;
  }
  */
 newImage.addEventListener('click', imgChange);
}

function imgChange(event){
  displayedImage.src = event.target.src;
}

/*
イベントオブジェクト e が関数に含まれていて、
関数内で e.target — これはボタンそのもの — 
の背景色スタイルを設定しているのがわかるでしょう。
イベントオブジェクトの target プロパティは、
常にイベントが生じた要素への参照となっています。
ですからこの例ではページではなくボタンの背景色がランダムに変わります。
*/

/* Wiring up the Darken/Lighten button */

btn.onclick = function(event) {
  const btnClass = btn.getAttribute('class');
  if (btnClass == "dark"){
    btn.setAttribute('class', 'light')
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else{
    btn.setAttribute('class', 'dark')
    btn.textContent = "Darken";
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}