function getInputValue(inputValue){
    const inputValueString = document.getElementById(inputValue);
    const inputValueAsNumber = inputValueString.value;
    const getNumber = parseFloat(inputValueAsNumber);
    inputValueString.value = '';
    return getNumber;
}
function setValue(inputId, value){
    const getInnerText = document.getElementById(inputId);
    getInnerText.innerText = value;
}
// Double number show in output
document.getElementById('double').addEventListener('click', function(){
 const inputNumber = getInputValue('input-field');
 const result = inputNumber * 2;
setValue('output', result);
})

// Triple number show in output
document.getElementById('triple').addEventListener('click', function(){
    const getInputNumber = getInputValue('input-field');
    const result = getInputNumber * 3;
    setValue('output', result);
})