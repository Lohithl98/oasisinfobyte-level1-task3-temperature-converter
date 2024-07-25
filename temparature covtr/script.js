document.addEventListener('DOMContentLoaded', () => {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('currentDate').innerText = `Current Date: ${currentDate}`;
});

function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputValue)) {
        updateOutputs('-', '-', '-');
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'celsius':
            celsius = inputValue;
            fahrenheit = (inputValue * 9 / 5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'fahrenheit':
            celsius = (inputValue - 32) * 5 / 9;
            fahrenheit = inputValue;
            kelvin = (inputValue - 32) * 5 / 9 + 273.15;
            break;
        case 'kelvin':
            celsius = inputValue - 273.15;
            fahrenheit = (inputValue - 273.15) * 9 / 5 + 32;
            kelvin = inputValue;
            break;
    }

    updateOutputs(celsius, fahrenheit, kelvin);
    addToHistory(inputValue, inputUnit, celsius, fahrenheit, kelvin);
}

function updateOutputs(celsius, fahrenheit, kelvin) {
    document.getElementById('celsiusOutput').innerText = `${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheitOutput').innerText = `${fahrenheit.toFixed(2)}°F`;
    document.getElementById('kelvinOutput').innerText = `${kelvin.toFixed(2)}K`;
}

function addToHistory(inputValue, inputUnit, celsius, fahrenheit, kelvin) {
    const history = document.getElementById('history');
    const entry = document.createElement('p');
    entry.innerText = `Input: ${inputValue} ${inputUnit.charAt(0).toUpperCase() + inputUnit.slice(1)}, Converted to: ${celsius.toFixed(2)}°C, ${fahrenheit.toFixed(2)}°F, ${kelvin.toFixed(2)}K`;
    history.appendChild(entry);
}

function clearHistory() {
    const history = document.getElementById('history');
    history.innerHTML = '';
}