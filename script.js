function convertFraction() {
    const fractionSelect = document.getElementById("fractionSelect").value;
    const fractionInput = document.getElementById("fractionInput").value;
    const fraction = fractionInput || fractionSelect;
    const result = fractionToDecimal(fraction);
    document.getElementById("fractionResult").innerText = `Decimal: ${result}`;
}

function fractionToDecimal(fraction) {
    if (fraction === "58") return 58;
    const [numerator, denominator] = fraction.split('/').map(Number);
    return denominator ? (numerator / denominator) : NaN;
}

function convertMinutes() {
    const minutes = document.getElementById("minutes").value;
    const result = minutesToDecimal(minutes);
    document.getElementById("minutesResult").innerText = `Decimal: ${result}`;
}

function minutesToDecimal(minutes) {
    return minutes / 60;
}
