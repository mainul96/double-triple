document.getElementById('triple').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    const result = inputFieldValue * 3;

    const output = document.getElementById('output');
    output.innerText = result;
})