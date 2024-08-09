let result = prompt("Как вас зовут?")
let name = "Alex" 
if (name == "Alex" && result == "Alex" ) {
    console.log("Alex");
} else { 
console.log("Пользователь не найден" );
}

let result_account = prompt("Номер счета?")
let account = "7777" 
if (account == "7777" && result_account == "7777"  )  {
    console.log(account );
} else { 
console.log("Пользователь не найден" );
}



let money = prompt("Сколько обналичить?");
money = Number(money);
let limit = 10000;
if (money > limit) {
  console.log("Недостаточно средств");
} else {
  let check = limit - money;
  console.log("Вывод: " + money);
  console.log("Остаток: " + check);
}