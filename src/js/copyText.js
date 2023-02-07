export default function copyText(ev) {
    const button = ev.currentTarget;
    const resultDark = document.getElementById("result");
    if (button.innerText === "Copy") {
        button.innerText = "Copied!";
        button.classList.add("success");
        navigator.clipboard.writeText(resultDark.value);
    } else {
        button.innerText = "Copy";
        button.classList.remove("success");
    }
}
