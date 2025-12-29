let display = document.getElementById('display');
        let operationDisplay = document.getElementById('operation');
        let firstOperand = null;
        let operator = null;
        let waitingForSecond = false;

        function inputDigit(digit) {
            if (waitingForSecond) {
                display.value = digit;
                waitingForSecond = false;
            } else {
                display.value = display.value === '0' ? digit : display.value + digit;
            }
        }

        function inputDecimal() {
            if (waitingForSecond) {
                display.value = '0.';
                waitingForSecond = false;
            } else if (display.value.indexOf('.') === -1) {
                display.value += '.';
            }
        }

        function clearDisplay() {
            display.value = '0';
            firstOperand = null;
            operator = null;
            waitingForSecond = false;
            operationDisplay.textContent = '';
        }

        function setOperator(op) {
            const inputValue = parseFloat(display.value);

            if (firstOperand === null) {
                firstOperand = inputValue;
            } else if (operator) {
                const result = performCalculation(firstOperand, inputValue, operator);
                display.value = result;
                firstOperand = result;
            }

            waitingForSecond = true;
            operator = op;
            
            let opSymbol = op;
            if (op === '*') opSymbol = '×';
            if (op === '/') opSymbol = '÷';
            if (op === '-') opSymbol = '−';
            
            operationDisplay.textContent = firstOperand + ' ' + opSymbol;
        }

        function performCalculation(first, second, op) {
            switch (op) {
                case '+':
                    return first + second;
                case '-':
                    return first - second;
                case '*':
                    return first * second;
                case '/':
                    return second !== 0 ? first / second : 'Error';
                default:
                    return second;
            }
        }

        function calculate() {
            const inputValue = parseFloat(display.value);
            
            if (firstOperand !== null && operator) {
                const result = performCalculation(firstOperand, inputValue, operator);
                display.value = result;
                operationDisplay.textContent = '';
                firstOperand = null;
                operator = null;
                waitingForSecond = true;
            }
        }

        function calculateSquare() {
            const value = parseFloat(display.value);
            const result = value * value;
            display.value = result;
            operationDisplay.textContent = '';
            firstOperand = null;
            operator = null;
            waitingForSecond = true;
        }

        function calculateCube() {
            const value = parseFloat(display.value);
            const result = value * value * value;
            display.value = result;
            operationDisplay.textContent = '';
            firstOperand = null;
            operator = null;
            waitingForSecond = true;
        }