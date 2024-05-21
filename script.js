// ## Étape 1

// Écrire une fonction `sum1` qui prend un tableau d’entiers à additionner entre eux.
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum1(tableau) { 
    let total = 0;
    for (let index = 0; index < tableau.length; index++) {
    total += tableau[index];
    
}
return total;
}
console.log (sum1(tableau))

// ## Étape 2

// Même exercice, mais avec une fonction récursive. On appellera la fonction `sum2`.
function sum2(tableau) { 
    if (tableau.length == 0) {
        return 0;
    }
    return tableau[0] + sum2(tableau.slice(1));
    // console.log(tableau[0]);
}
console.log(sum2(tableau))

// ## Étape 3
// Écrire une fonction `factorial` qui prend un entier en paramètre et calcule son factoriel récursivement.
function factorial(n) {
   if (n <= 1) {
       return 1;
   } else {
       return n * factorial(n - 1);
    
   }
}

console.log(factorial(5))

// ## **Étape 4**

// Écrire une fonction `fibonacci` qui prend un entier `x` en paramètre et résoudre la suite de Fibonacci.
function fibonacci(x) {
    if (x <= 1) {
        return 1
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2)
    }
}

console.log(fibonacci(10));