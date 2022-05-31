let unitDefault = document.getElementById('unitDefault');
let unitResult1 = document.getElementById('unitResults1');
let unitResult2 = document.getElementById('unitResults2');
let unitResult = document.getElementById('unitResults');
let userInput = document.getElementById('acceptInput');


function message(btn) {

    unitDefault.classList.add('hide');

    unitResult.innerHTML = `<h3>Mass</h3> ${userInput.value} kilos =  ${parseFloat(userInput.value * 2.205).toFixed(2)}. pounds`;
    unitResult1.innerHTML = `<h3>Volume</h3> ${userInput.value} liters = ${parseFloat(userInput.value / 3.785).toFixed(2)} gallons`;
    unitResult2.innerHTML = `<h3>Length</h3> ${userInput.value} meters = ${parseFloat(userInput.value * 3.281).toFixed(2)} feet`;
}










