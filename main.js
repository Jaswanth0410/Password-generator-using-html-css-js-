const passwordBox = document.getElementById("password");
const length = 8;

const upperCase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase  = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const symbols = "@#$%^&*()_+~|{[]<>/-=}"

const allChars = upperCase + lowerCase  + Number + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += Number[Math.floor(Math.random()*Number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
