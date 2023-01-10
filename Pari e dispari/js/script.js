/*
    STEPS:
        1. Chiedere all'utente di inserire un numero pari o dispari da uno a cinque
            1A. Creare un prompt che salvi la risposta in una variabile.
        2. Dichiarare una variabile prima della funzione, alla quale assoceremo il numero estratto per il computer.
        3. Creare una funzione che estrae un numero casuale tra uno e cinque per il computer.        
        4. Usare una funzione per stabilire se il risultato della somma sia pari o dispari.
            4A. Fare la somma dei numeri dell'utente e del computer.
            4B. Al suo interno mettiamo la condizione che verifichi la disparità o meno 
            4C. Dichiarare se ha vinto l'utente o il computer.
*/
const userWord = prompt("Pari o dispari?");
console.log("userWord", userWord, typeof userWord);

const userNumber = parseInt(prompt("Scrivi un numero da uno a cinque"));
console.log("userNumber", userNumber, typeof userNumber);

// Prima soluzione
// let computerNumber;

// function computerNumberGenerator () {
//     computerNumber = Math.floor(Math.random() * 5) + 1;

//     return computerNumber;
// }

// const cpuNumber = computerNumberGenerator();
// console.log("cpuNumber", cpuNumber, typeof cpuNumber);

// function pariDispari (num1, num2) {
//     const somma = num1 + num2;
//     console.log("somma", somma, typeof somma);

//     if (somma % 2 == 0) {
//         alert("Vince pari");
//         console.log("Vince pari");
//     }
//     else {
//         alert("Vince dispari");
//         console.log("Vince dispari");
//     }
// }

// const risultato = pariDispari(userNumber, cpuNumber);


// Seconda soluzione
// function pariDispari (num1, num2) {
//     const somma = num1 + num2;
//     console.log("somma", somma, typeof somma);

//     if (somma % 2 == 0) {
//         return "pari";
//     }
//     else {
//         return "dispari";
//     }
// }

// const risultato = pariDispari(userNumber, cpuNumber);
// console.log("risultato", risultato, typeof risultato);

// if (userWord === risultato) {
//     alert("Hai vinto!");
//     console.log("Hai vinto!");
// }
// else {
//     alert("Hai perso");
//     console.log("Hai perso");
// }


// Terza soluzione
function pariDispari (userWord) {
    const computerNumber = Math.floor(Math.random() * 5) + 1;
    console.log("cpuNumber", computerNumber, typeof computerNumber);

    const somma = userNumber + computerNumber;
    console.log("somma", somma, typeof somma);

    let risultato;

    if (somma % 2 == 0) {
        risultato = "pari";
    }
    else {
        risultato = "dispari";
    }

    if (userWord === risultato) {
        alert("Hai vinto!");
        console.log("Hai vinto!");
    }
    else {
        alert("Hai perso");
        console.log("Hai perso");
    }
}

const output = pariDispari(userWord);