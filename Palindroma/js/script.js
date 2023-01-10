/*
    STEPS:
        1. Chiedere all'utente di inserire una parola tramite un prompt.
        2. Creare una funzione che rigiri la parola fornita.
        3. Verificare se c'è corrispondenza tra le due parole con un if.
        4. Informare l'utente se la parola inserita sia o meno palindroma.
*/

const userWord = prompt("Scrivi una parola");
console.log("userWord", userWord, typeof userWord);

function checkPalindroma (word) {
    const userArrayWord = userWord.split("");
    console.log("userArryWord", userArrayWord);

    const reverseArrayWord = userArrayWord.reverse()
    console.log("reverseArrayWord", reverseArrayWord);

    const reverseWord = reverseArrayWord.join("");
    console.log("reverseWord", reverseWord, typeof reverseWord);

    if (userWord === reverseWord) {
        alert("La tua parola è palindroma");
        console.log("La tua parola è palindroma");
    }
    else {
        alert("La tua parola non è palindroma");
        console.log("La tua parola non è palindroma");
    }
}

const risultato = checkPalindroma(userWord);