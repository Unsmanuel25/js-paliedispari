/*
 Chiedere all'utente di scrivere una parola
capisco se la aprola inserita e' palindroma

/* fase di preparazione */

const form = document.getElementById('palindroma-form');
const wordField = document.getElementById('word');
const resulElement = document.getElementById('result');

/* verifico se la parola e' palindroma */
function isPalindrome(word) {
    let result;
    const reversedworld = word.split('').reverse().join('');
    if (reverseWord === word) {
        result = true;
    } else {
        result = false
    }

    return result;
}


form.addEventListener('submit', function (event) {
    event.preventDefault()

    /* fase di raccolta dati */
    const word = wordfield.value.trim();

    /* fase di elaborazione */
    const result = isPalindrome(word);
    console.log(result);

    /* fase ndi output */
    resultElement.innerText = message;
})