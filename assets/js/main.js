// CALCULATOR PROGRAM

let display=$('.form-control')

function appendToDisplay(input){
    display.val(display.val() + input) ;
}

function clearDisplay(){
    display.val('');
}

function calculate() {
        let result = eval(display.val());
        display.val(result);
}