export default function Thema() {
    const body = document.querySelector("body");
    const copyDark = document.querySelector("#copy");
    const thema = document.querySelector("#thema");
    const telaInput = document.querySelector("#tela");
    const resultDark = document.querySelector("#result");
    const btn = document.querySelectorAll(".btn");
    const clear = document.querySelector(".clearStyle");
    const igual = document.querySelector(".igualStyle");
    body.classList.toggle("dark");
    thema.classList.toggle("darkBtn");
    telaInput.classList.toggle("darkColorInput");
    copyDark.classList.toggle("copyDark");
    resultDark.classList.toggle("resultDark");
    btn.forEach((btnAll) => {
        btnAll.classList.toggle("colorWhite");
    });
    clear.classList.toggle("style");
    igual.classList.toggle("style");
}
