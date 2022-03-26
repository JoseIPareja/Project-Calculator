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

// DISPLAY NUMBERS ON SCREEN & CONSOLE
const numberbuttons = document.querySelectorAll('.small');
const screen = document.querySelector('.screen');
numberbuttons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent += button.textContent;
        let digit = button.textContent;
        console.log(digit);
    })
})

// DISPLAY OPERATORS ON SCREEN & CONSOLE
const operatebuttons = document.querySelectorAll('.operator');
operatebuttons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent += button.textContent;
        let operator = button.textContent;
        console.log(operator);
    })
})

// FUNCTION TO CALCULATE WHAT IS ON THE SCREEN
function calculate() {
    let contenido = screen.textContent;
    let contenidoDividido = contenido.split(/(\D)/);
    if (contenidoDividido[1] === "+") {
        let resultado = addNumbers(parseFloat(contenidoDividido[0]), parseFloat(contenidoDividido[2])); 
        return screen.textContent = resultado;
    } else if (contenidoDividido[1] === "-") {
        let resultado = substractNumbers(parseFloat(contenidoDividido[0]), parseFloat(contenidoDividido[2])); 
        return screen.textContent = resultado;
    } else if (contenidoDividido[1] === "x") {
        let resultado =multiplyNumbers(parseFloat(contenidoDividido[0]), parseFloat(contenidoDividido[2])); 
        return screen.textContent = resultado;
    } else if (contenidoDividido[1] === "/") {
        let resultado =divideNumbers(parseFloat(contenidoDividido[0]), parseFloat(contenidoDividido[2])); 
        return screen.textContent = resultado;
    } else return;
}

// DISPLAY INTERFACE
const displayer = document.querySelector('.displayer');
displayer.addEventListener('click', calculate);


// CLEAR INTERFACE
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    screen.textContent = "";
})

// DELETE INTERFACE
const del = document.querySelector('.delete');
del.addEventListener('click', () => {
    let contenido = screen.textContent;
    screen.textContent = contenido.substring(0, contenido.length - 1);
})