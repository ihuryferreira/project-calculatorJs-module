export default function calculate() {
    const resultDark = document.querySelector("#result");
    const telaInput = document.querySelector("#tela");
    resultDark.value = "ERROR";
    resultDark.classList.add("error");
    const result = eval(telaInput.value);
    resultDark.value = result;
    resultDark.classList.remove("error");
}
