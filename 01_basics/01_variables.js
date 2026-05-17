const accountid = 1234567890;
let accountname = "John Doe";
var email = "johndoe@example.com";
accountCity = "New York";
let accountstate;

// accountid = 9876543210; // This will throw an error because accountid is a constant
accountname = "Jane Smith"; // This is allowed because accountname is declared with let
email = "janesmith@example.com"; // This is allowed because email is declared with var
accountCity = "Los Angeles"; // This is allowed because accountCity is declared without a keyword

console.table([accountid, accountname, email, accountCity, accountstate]);