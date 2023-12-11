let suma = 0;
let contador = 0;

while (contador < 5) {
    let num = parseInt(prompt("Dime un numero"));
    let esPrimo = false;

    for (let x = 2; x <= num; x++) {
        if (num % x == 0 && num != x) {
            esPrimo = false;
            break;
        } else {
            esPrimo = true;
        }
    }

    if (esPrimo) {
        suma += num;
        console.log("Como es primo, la nuva cantidad es:", suma);
    }

    contador++;
}

