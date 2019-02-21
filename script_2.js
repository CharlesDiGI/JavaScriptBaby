function script_2() {

    function facto(n) {
        if (n < 0) {
            alert("Merci de renseigner un entier POSITIF");
            return ("essaie encore");
        }
        else if (n == 0) {
            return 1;
        }
        else {
            let fact = 1;
            for (let i = 1; i <= n; i++) {
                fact = fact * i;
            }
            return fact;
        }
    }


    let userChoice = prompt("Entre un nombre entier positif et obtiens sa factorielle en un instant (véridique)")


    console.log(facto(userChoice));

}