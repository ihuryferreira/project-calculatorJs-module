import calculate from "./calcule.js";
import Thema from "./themaSwitch.js";
import copyText from "./copyText.js";
import {
    handleButtonPress,
    handleClear,
    handleTyping,
} from "./handleTyping.js";

document.querySelectorAll(".btn").forEach((charkeys) => {
    charkeys.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClear);

document.querySelector("#tela").addEventListener("keydown", handleTyping);

document.getElementById("igual").addEventListener("click", calculate);

document.getElementById("thema").addEventListener("click", Thema);

document.getElementById("copy").addEventListener("click", copyText);
