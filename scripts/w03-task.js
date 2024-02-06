/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}
let subtractNumbers= function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract (subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply (multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide (divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotal);

function getTotal() {
    let subtotal = (Number(document.querySelector('#subtotal').value)).toFixed(2);
    let member = document.querySelector('#member');
    if (member.checked) {
        let discounted = (discount(subtotal)).toFixed(2);
        document.querySelector('#total').textContent = `$ ${discounted}`;
    } else {
        document.querySelector('#total').textContent = `$ ${subtotal}`;
    }
}
function discount (number1) {
    return number1 - (number1 * 0.20)
}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbersArray;
/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').innerHTML = odds;
/* Output Evens Only Array */
let evens = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evens;
/* Output Sum of Org. Array */
let sumofArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = sumofArray;
/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map((number) => number * 2);
document.getElementById('multiplied').innerHTML = multiplied;
/* Output Sum of Multiplied by 2 Array */
let sumofMultiplied = multiplied.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = sumofMultiplied;