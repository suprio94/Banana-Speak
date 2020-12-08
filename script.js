var btnTranslate= document.querySelector("#btn_Translate");

var txtInput= document.querySelector("#txt_input");


var OutputArea= document.querySelector("[name=OutputText]");


var minion = "agkdjghsjkflkjhfhgfh";

btnTranslate.addEventListener("click", ClickEventHandler)

function ClickEventHandler(){



var MinOut= minion + " " + txtInput.value;

OutputArea.innerText = MinOut;
}

