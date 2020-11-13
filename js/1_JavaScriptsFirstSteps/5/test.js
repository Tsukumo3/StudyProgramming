// String
const str1 = document.getElementById("str1");
const str2 = document.getElementById("str2");
const str3 = document.getElementById("str3");

let string1 = "This is my String";

str1.textContent = string1;
str2.textContent = "string.length : " + string1.length;
str3.textContent = "string[2] : " + string1[2];

// 挨拶を選別する

function select(){
  const list = document.getElementById('select');
  let greetings = ['Happy Birthday!',
                  'Merry Christmas my love',
                  'A happy Christmas to all the family',
                  'You\'re all I want for Christmas',
                  'Get well soon'];

  for (let i = 0; i < greetings.length; i++) {
    let input = greetings[i];
    // 以下の条件の括弧内の内容を書き換えて下さい
    if (greetings[i].indexOf('Christmas') !== -1) {
      let listItem = document.createElement('li');
      listItem.textContent = input;
      list.appendChild(listItem);
    }
  }
}

select();


// 単語の最初の文字を大文字にする。それ以降は小文字にする

function ChangeUpperCase(){
  const list = document.getElementById('UpperCase');
  let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

  for (let i = 0; i < cities.length; i++){
    let city = cities[i];
    let listItem = document.createElement('li');
    listItem.textContent = city[0].toUpperCase() + city.slice(1).toLowerCase();
    list.appendChild(listItem);
  }
}

ChangeUpperCase()

// 既存の部分から新しい文字列を作成する

function getStationName(){
  const list = document.getElementById('stations');
  let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
  
  for (let i = 0; i < stations.length; i++){
    let station = stations[i];
    let listItem = document.createElement('li');

    let indexOfSemiColon = station.indexOf(";");

    listItem.textContent = station.slice(0,3) + ": " + station.slice(indexOfSemiColon+1, station.length);

    list.appendChild(listItem);
  }
}

getStationName();