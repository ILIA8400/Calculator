document.addEventListener("DOMContentLoaded", () => {
    const $ = document;
    const input = $.querySelector("input");
    let value = "";

    let operator = "";
    let number = 0;
    let result = 0;
    let newOperation = false;

    const buttons = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    buttons.forEach((button, index) => {
        $.querySelector(`#${button}`).addEventListener("click", () => {
            if (newOperation) {
                value = "";
                newOperation = false;
            }
            value += index;
            input.value = value;
        });
    });

    $.querySelector("#dot").addEventListener("click", () => {
        if (!value.includes(".")) {
            value += ".";
            input.value = value;
        }
    });

    $.querySelector("#clear").addEventListener("click", () => {
        number = 0;
        input.value = "";
        value = "";
        operator = "";
        result = 0;
    });

    const operators = {
        plus: "+",
        minus: "-",
        times: "*",
        division: "/"
    };

    for (let op in operators) {
        $.querySelector(`#${op}`).addEventListener("click", () => {
            if (operator) {
                calc();
            } else {
                number = parseFloat(value);
            }
            operator = op;
            value = "";
            input.value = operators[op];
            newOperation = true;
        });
    }

    $.querySelector("#equ").addEventListener("click", () => {
        calc();
        number = result;
        input.value = result;
        value = input.value;
        operator = "";
    });

    function calc() {
        if (operator == "plus")
            result = number + parseFloat(value);
        else if (operator == "minus")
            result = number - parseFloat(value);
        else if (operator == "times")
            result = number * parseFloat(value);
        else if (operator == "division")
            result = number / parseFloat(value);

        number = result;
        newOperation = true;
    }
});
