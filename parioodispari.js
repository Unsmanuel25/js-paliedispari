/* chiedere all' utente di scrivere un numero
/* verificare se il numero inserito e' pari o dispari

/* fase di preparazione */
const form = document.getElementById('parioodispari-form');
const numberfield = document.getElementById('number');
const choiceField = document.getElementById('choice');
const resultElement = document.grtElementById('result');


/* funzione */
function getRandomNumber(min = 1, max = 100, isMaxIncluded = true) {
}

function isEven(number) {
    return number % 2 === 0;
}

/* intercetto il form */
form.addEventListener('submit', function (event) {
    event.preventDefault();

    /* fase di recuper dati */
    const userNumber = parsInt(numberFiled.value)
    const userChoice = choicefield.value;
    if (isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
        alert('il numero deve essere compreso tra 1 e 5');
        return
    }

    if (userChoice !== 'odd' && userChoice !== 'even') {
        alert('Devi scegliere pari o dispari');
        return;
    }

    /* generare numero casuale */
    const cpuNumber = getRandomNumber(1, 5);

    /* fase di elaborazione */
    const sum = userNumber + cpuNumber;

    const rightchoice = iseven(sum) ? 'even' : 'odd';
    const winner = choiceValue === rightchoice ? 'user' : 'CPU';

    /* fase output */
    resultElement.innertext = `the winner is: ${winner}`;

})
