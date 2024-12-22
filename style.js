document.addEventListener("keydown", function(event){
    const key= event.key;
    if (key >= '0' && key <= '9') {
        appendvalue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendvalue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === '.') {
        appendvalue('.');
    }
});
function appendvalue(value){
    const display=document.getElementById('display');
    display.value +=value;
}
function clearDisplay(){
    const display=document.getElementById('display');
    display.value='';

}
function calculateResult(){
    const display=document.getElementById('display');
    try{
        display.value=eval(display.value);
        }catch{
            display.value='Error';
        }
}