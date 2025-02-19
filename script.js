function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

function calculateSquare() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value * value;
    }
}

function calculateSqrt() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        alert("Invalid Input for Square Root");
    }
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = -value;
    }
}
