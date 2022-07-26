let user_name;
let year = new Date();

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