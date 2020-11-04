/** 
 * 数字を予想する単純なゲームを作って欲しい。
 * 
 * ランダムな 1 から 100 の数字を決めて、プレイヤーに 10 回以内に当ててもらうゲームだ。
 * 
 * プレイヤーには予想する都度、正解か間違いかを表示する。もしプレイヤーが間違っていれば、
 * プレイヤーが予想した数字に応じて、大きすぎるか小さすぎるかを表示する。
 * 
 * また、プレイヤーの前回の予想がどうだったかも表示する。
 * ゲームはプレイヤーの予想が正しかった場合、もしくは回数の上限に達した場合に終了する。
 * 
 * ゲームが終了したら、プレイヤーはもう一度プレイ開始できるようにする。
 */
// let 再宣言禁止, var:再宣言,再代入可能 const:再宣言,再代入が禁止

let randomNumber = (Math.floor(Math.random() * 100 )+ 1);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const recommend = document.querySelector('.recommend');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let min = 1;
let max = 100;

recommend.textContent = 'recommend : ' + Math.floor((min + max)/2);

function checkGuess() {
  let userGuess = Number(guessField.value);
   
  if (guessCount === 1){
    guesses.textContent = '前回の予想:' ;
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent  = 'おめでとう! 正解です!';
    lastResult.style.color = 'white';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    recommend.textContent = '';
    setGameOver();
  }
  else if (guessCount === 10){
    lastResult.textContent = '!!! ゲームオーバー !!!';
    setGameOver();
  }
  else {
    lastResult.textContent = '間違いです!';
    lastResult.style.color = 'white';
    lastResult.style.backgroundColor = 'red';

    if (userGuess  < randomNumber) {
      lowOrHi.textContent = '今の予想 は 小さ過ぎ です! もっと 大きな数字 です!';
      min = userGuess;
    }
    else if (userGuess > randomNumber){
      lowOrHi.textContent = '今の予想 は 大き過ぎ です! もっと 小さな数字 です!';
      max = userGuess;
    }


    recommend.textContent = 'recommend : ' + Math.floor((min + max)/2);

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '新しいゲームを始める';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}