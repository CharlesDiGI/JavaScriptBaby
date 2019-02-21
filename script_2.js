function script_2() {

function facto(inputNumber) {
    let fact = 1;

    for (let i = 1; i <= inputNumber; i++) {
        fact = fact * i;

    }
    return fact
}

let userChoice = prompt("Entre un nombre et obtiens sa factorielle en un instant")

// while (parseInt(userChoice) <= 0) {
//     let userChoice = prompt("il faut un chiffre supérieur à 0 steuplééé")
//     console.log(facto(typeof userChoice));
// }

console.log(facto(userChoice));

}