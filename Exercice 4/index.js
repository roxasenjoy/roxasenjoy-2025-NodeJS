// Fichier : index.js

// Récupération des arguments depuis la ligne de commande
const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Usage : node index.js <operation> <valeur1> <valeur2> ...');
    process.exit(1);
}

const operation = args[0];
const values = args.slice(1).map(Number);

if (values.some(isNaN)) {
    console.error('Veuillez fournir uniquement des nombres après l\'opération.');
    process.exit(1);
}

function calculate(operation, values) {
    switch (operation) {
        case 'add':
            return values.reduce((acc, val) => acc + val, 0);
        case 'subtract':
            return values.reduce((acc, val) => acc - val);
        case 'multiply':
            return values.reduce((acc, val) => acc * val, 1);
        case 'divide':
            return values.reduce((acc, val) => acc / val);
        default:
            console.error('Opération non supportée. Utilisez : add, subtract, multiply, divide.');
            process.exit(1);
    }
}

const result = calculate(operation, values);
console.log(`Résultat : ${result}`);