const accountId = 123;
let accountEmail = "amithbv0606@gmail.com";
var accountPassword = "123456";
accountCity = "Bangalore";
let accountState;

// accountId = 2; // Not allowed

accountEmail = "am@gmail.com";
accountPassword = "212121";
accountCity = "Kerala"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/* 
Prefer not to use var because of issue in block and functional scope
*/