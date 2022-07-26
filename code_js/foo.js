let user_name;
let year = new Date();

const keyName = 'visited';
const keyValue = true;

if (!sessionStorage.getItem(keyName)) {
  //sessionStorageにキーと値を追加
  sessionStorage.setItem(keyName, keyValue);

  //ここに初回アクセス時の処理
  user_name = prompt("Enter Your Name");
  if(user_name == "" || user_name == null) {
      year_result = year.getFullYear();
      user_name = "人間の" + year_result;
      console.log(user_name);
      document.getElementById("user_name").innerHTML = user_name;
  } else {
      console.log(user_name);
      document.getElementById("user_name").innerHTML = user_name;
  }

} else {
  //ここに通常アクセス時の処理
  if(user_name == "" || user_name == null) {
    year_result = year.getFullYear();
    user_name = "人間の" + year_result;
    console.log(user_name);
    document.getElementById("user_name").innerHTML = user_name;
  } else {
    console.log(user_name);
    document.getElementById("user_name").innerHTML = user_name;
  }
}