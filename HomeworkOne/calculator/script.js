function calculateSum() {
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        var sum = firstNumber + secondNumber;
        document.getElementById('result').innerHTML = 'Result: ' + sum;
        console.log(num1, num2);
    } else {
        document.getElementById('result').innerHTML = 'Please enter a number';
    }
}