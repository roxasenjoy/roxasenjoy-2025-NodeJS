function divide(a, b) {
    if (b === 0) throw new Error('Division par zéro non autorisée');
    return a / b;
}

module.exports = divide;
