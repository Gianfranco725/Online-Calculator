document.addEventListener('keydown', function(tecla) {
    if(tecla.key == 0) document.calculator.ans.value+='0';
    if(tecla.key == 1) document.calculator.ans.value+='1';
    if(tecla.key == 2) document.calculator.ans.value+='2';
    if(tecla.key == 3) document.calculator.ans.value+='3';
    if(tecla.key == 4) document.calculator.ans.value+='4';
    if(tecla.key == 5) document.calculator.ans.value+='5';
    if(tecla.key == 6) document.calculator.ans.value+='6';
    if(tecla.key == 7) document.calculator.ans.value+='7';
    if(tecla.key == 8) document.calculator.ans.value+='8';
    if(tecla.key == 9) document.calculator.ans.value+='9';

    if(tecla.key == "+") document.calculator.ans.value+='+';
    if(tecla.key == "-") document.calculator.ans.value+='-';
    if(tecla.key == "*") document.calculator.ans.value+='*';
    if(tecla.key == "/") document.calculator.ans.value+='/';

    if(tecla.key == "Backspace") document.calculator.ans.value='';
    if(tecla.key == "Enter") document.calculator.ans.value = eval(document.calculator.ans.value);
})

