// https://ja.wikipedia.org/wiki/%E3%83%84%E3%82%A7%E3%83%A9%E3%83%BC%E3%81%AE%E5%85%AC%E5%BC%8F
// http://www.ele.kochi-tech.ac.jp/tacibana/etc/program/zeller.pdf

let date = new Date();
let y = date.getFullYear();
let m = date.getMonth() + 1;
let d = date.getDate();
let full = prompt(`Enter your birthday(e.g. ${y}/${m}/${d}  *half size only)`);
while(full.indexOf('<') != -1 || full.indexOf('>') != -1) {
  alert("Did you try injection attack?");
  full = prompt(`Enter your birthday(e.g. ${y}/${m}/${d}  *half size only)`);
}
let components = full.split("/");
console.log(components);

year = Number(components[0]);
month = Number(components[1]);
day = Number(components[2]);

if(month <= 2) {
  year -= 1;
  month += 12;
}

C = Math.floor(year / 100);
Y = year % 100;

h = (5 * C + Math.floor(C / 4) + Y + Math.floor(Y / 4) + Math.floor((26 * (month + 1)) / 10) + day + 6) % 7; 
// day + parseInt((13 * (month + 1)) / 5) + Y + parseInt(Y / 4) + (-2 * C) + parseInt(C / 4);
console.log(h);

switch(h) { // リスト化してそれを使えばいいのかな、迷う
  case 0:
    document.getElementById("date").innerHTML = "日曜日(Sunday)";
    break;
  case 1:
    document.getElementById("date").innerHTML = "月曜日(Monday)";
    break;
  case 2:
    document.getElementById("date").innerHTML = "火曜日(Tuesday)";
    break;
  case 3:
    document.getElementById("date").innerHTML = "水曜日(Wednesday)";
    break;
  case 4:
    document.getElementById("date").innerHTML = "木曜日(Thursday)";
    break;
  case 5:
    document.getElementById("date").innerHTML = "金曜日(Friday)";
    break;
  case 6:
    document.getElementById("date").innerHTML = "土曜日(Saturday)";
    break;
  default:
    document.getElementById("date").innerHTML = "Something wrong is happened (Did you enter it following the format?)";
}

document.getElementById("full-birthday").innerHTML = String(full);