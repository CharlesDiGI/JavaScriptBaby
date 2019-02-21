let userChoice = prompt("Combien d'étages de pyramide veux-tu Kheops ?")
pyramide(userChoice);

function pyramide(n) {
    let espace = " ";
    let diese = "#";
    for (let i = 1; i <= n; i++) {
        console.log(espace.repeat(n - i) + diese.repeat(i));
    }
}
