// conditional
const select = document.querySelector("select");
const para = document.getElementById("text");

select.addEventListener('change', setWeather);

function setWeather(){
  const choice = select.value;
  
  if (choice === 'sunny') {
    para.textContent = '今日はとてもいい天気です。短いパンツをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！';
  } else if (choice === 'rainy') {
    para.textContent = '雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。';
  } else if (choice === 'snowing') {
    para.textContent = '雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。';
  } else if (choice === 'overcast') {
    para.textContent = '雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持ちましょう。';
  } else {
    para.textContent = '';
  }
}

function setWeatherSwitch() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = '今日はとてもいい天気です。短いパンツをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！';
      break;
    case 'rainy':
      para.textContent = '雨が降っています。レインコートと傘を忘れないようにしましょう。';
      break;
    case 'snowing':
      para.textContent = '雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。';
      break;
    case 'overcast':
      para.textContent = '雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持ちましょう。';
      break;
    default:
      para.textContent = '';
  }
}

const calenderSelect = document.getElementById("calendarSelect");
const list = document.getElementById('list');
const h1 = document.getElementById("month");

calendarSelect.onchange = function(){
  let choice = calendarSelect.value;
  let days = 31;
  if (choice === '4' || choice === '6' || choice === '9' || choice === '11'){
    days = 30;
  }
  else if (choice === '2'){
    days = 28;
  }
  createCalendar(days, choice + '月');
}

function createCalendar(days, choice){
  list.innerHTML = "";
  h1.textContent = choice;

  for (let i = 1; i <= days; i++){
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, '1月')