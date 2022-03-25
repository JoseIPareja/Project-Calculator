// FUNCTION FOR +
function addNumbers(num1, num2) {
    return num1 + num2;
}

// FUNCTION FOR -
function substractNumbers(num1, num2) {
    return num1 - num2;
}

// FUNCTION FOR *
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// FUNCTION FOR /
function divideNumbers(num1, num2) {
    return num1 / num2;
}

// FUNCTION TO DISPLAY ABOVE FUNCTIONS
function display(operator, num1, num2){
    switch(operator){
        case '+':
            return addNumbers(num1, num2), console.log(addNumbers(num1, num2)); 
            break;
        case '-':
            return substractNumbers(num1, num2), console.log(addNumbers(num1, num2));
            break;
        case '*':
            return multiplyNumbers(num1, num2), console.log(addNumbers(num1, num2));
            break;
        case '/':
            return divideNumbers(num1, num2), console.log(addNumbers(num1, num2));
            break;
    }
}

// DISPLAY NUMBERS ON SCREEN
const buttons = document.querySelectorAll('.small');
const screen = document.querySelector('.screen');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent += button.textContent;
    })
})

//const operator = document.querySelector('.operator');
//const displayer = document.querySelector('.displayer');
//displayer.addEventListener('click', display(operator.textContent);