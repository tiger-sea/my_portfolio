// https://ja.wikipedia.org/wiki/%E3%83%84%E3%82%A7%E3%83%A9%E3%83%BC%E3%81%AE%E5%85%AC%E5%BC%8F

let date = new Date();
let y = date.getFullYear();
let m = date.getMonth() + 1;
let d = date.getDate();
let full = prompt(`Enter your birthday(e.g. ${y}/${m}/${d}  *half size only)`);
let components = full.split("/");
let h = 0;

year = Number(components[0]);
month = Number(components[1]);
day = Number(components[2]);

// console.log(year, month, day);

C = Math.floor(year / 100);
Y = year % 100;

if(year <= 2) {
  year -= 1;
  month += 12;
}

h = (day + Math.floor((26 * (month + 1)) / 10) + Y + Math.floor(Y / 4) + (-2 * C) + Math.floor(C / 4)) % 7;

switch(h) { // リスト化してそれを使えばいいのかな、迷う
  case 1:
    document.getElementById("date").innerHTML = "日曜日(Sunday)";
    break;
  case 2:
    document.getElementById("date").innerHTML = "月曜日(Monday)";
    break;
  case 3:
    document.getElementById("date").innerHTML = "火曜日(Tuesday)";
    break;
  case 4:
    document.getElementById("date").innerHTML = "水曜日(Wednesday)";
    break;
  case 5:
    document.getElementById("date").innerHTML = "木曜日(Thursday)";
    break;
  case 6:
    document.getElementById("date").innerHTML = "金曜日(Friday)";
    break;
  case 0:
    document.getElementById("date").innerHTML = "土曜日(Saturday)";
    break;
  default:
    document.getElementById("date").innerHTML = "Something wrong is happened (Did you enter it following the format?)";
}

document.getElementById("full-birthday").innerHTML = String(full);