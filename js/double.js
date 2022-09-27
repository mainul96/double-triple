document.getElementById('double').addEventListener('click', function(){
    const getInputValue = document.getElementById('input-field');
    const inputValueString =getInputValue.value;
    const inputValue = parseFloat(inputValueString);
    getInputValue.value = '';
    const result = inputValue * 2;

    const output = document.getElementById('output');
    output.innerText = result;
})