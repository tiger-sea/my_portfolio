// https://into-the-program.com/execution-firsttime-access/
// sessionStorageの参考サイト
let user_name;
let year = new Date();

const keyName = 'visited';

if (sessionStorage.getItem(keyName) == null) {
  //ここに初回アクセス時の処理
  user_name = prompt("Enter Your Name");
  n = user_name.length;
  if(n > 12) {
    alert("input less than 12 characters");
    user_name = prompt("Enter Your Name");
  }

  //sessionStorageにキーと値を追加
  sessionStorage.setItem(keyName, user_name);
  if(user_name == "" || user_name == null) {
      year_result = year.getFullYear();
      user_name = "人間の" + year_result;
      document.getElementById("user_name").innerHTML = user_name;
  } else {
      document.getElementById("user_name").innerHTML = user_name;
  }
} else {
  //ここに通常アクセス時の処理
  user_name = sessionStorage.getItem(keyName);
  if(user_name == "" || user_name == null) {
    year_result = year.getFullYear();
    user_name = "人間の" + year_result;
    document.getElementById("user_name").innerHTML = user_name;
  } else {
    document.getElementById("user_name").innerHTML = user_name;
  }
}