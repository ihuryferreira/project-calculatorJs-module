import calculate from "./calcule.js";

const inputTela = document.querySelector("#tela");

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value;
    inputTela.value += value;
}

export function handleClear(ev) {
    inputTela.value = "";
    inputTela.focus();
}

export function handleTyping(ev) {
    ev.preventDefault();
    const allowedKeys = [
        "(",
        ")",
        "/",
        "*",
        "-",
        "+",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
        "0",
        ".",
        "%",
        " ",
    ];
    if (allowedKeys.includes(ev.key)) {
        inputTela.value += ev.key;
        return;
    }
    if (ev.key === "Backspace") {
        inputTela.value = inputTela.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
        calculate();
    }
}
