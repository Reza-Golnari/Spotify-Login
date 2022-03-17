let user1 = {
  userName: "Reza",
  password: "RezaProgrammer",
  email: "rezagolnari.pragrammer@gmail.com",
};
let user2 = {
  userName: "Moein",
  password: "Moein1313",
  email: "moein.mirsaeedi@gmail.com",
};

let submit = document.getElementById("btn");
let input1 = document.getElementById("inputUser");
let input2 = document.getElementById("inputWord");
let forgot = document.getElementById("forgot");

function Shart() {
  if (input1.value == user1.userName && input2.value == user1.password) {
    window.location.href = "index1.html";
  } else if (input1.value == user2.userName && input2.value == user2.password) {
    window.location.href = "index1.html";
  } else if (input1.value == "Mamad" && input2.value == "Mamat") {
    window.alert("فقط انسان ها میتوانند در سایت لاگین کنند");
  } else {
    window.alert("Eror");
  }
}
