var btnTrans = document.querySelector("#btn_Trans");

var textInput = document.querySelector("#inputText")

var textOutput = document.querySelector("#outputText")

var serverURL= "https://api.funtranslations.com/translate/minion.json";



function getTranslationURL(inputText){
    return serverURL + "?" + "text=" + inputText;
}

btnTrans.addEventListener("click", ClickHandler);

function ClickHandler(){

    var userInput = textInput.value; 
    fetch(getTranslationURL(userInput)).then(Response => Response.json())
    .then(json => {
       textOutput.innerText= json.contents.translated;

    
    })
}
