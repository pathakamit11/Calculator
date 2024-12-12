const display = document.getElementById("inputBox");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
        display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}
function deleteValue(){
    display.value = display.value.substring(0, display.value.length-1)
}