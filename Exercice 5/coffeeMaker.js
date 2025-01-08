// Fichier : coffeeMaker.js

// Importation du module readline pour interagir avec l'utilisateur via le terminal
const readline = require('readline');

// Création d'une interface pour lire les entrées utilisateur et afficher des sorties
const rl = readline.createInterface({
    input: process.stdin, // Lire l'entrée depuis le terminal
    output: process.stdout // Afficher les messages dans le terminal
});

// Poser une question à l'utilisateur et attendre la réponse
const askQuestion = (question, callback) => {
    rl.question(question, (answer) => {
        callback(answer); // Appeler la fonction de rappel avec la réponse de l'utilisateur
    });
};

// Fonction principale pour préparer le café
function prepareCoffee() {
    // Demander la provenance des grains
    askQuestion("Choisissez la provenance des grains (Brésil, Vietnam, Éthiopie) : ", (origin) => {
        // Vérifier si l'utilisateur a saisi une provenance valide
        if (!['Brésil', 'Vietnam', 'Éthiopie'].includes(origin)) {
            console.log("Provenance invalide. Veuillez choisir entre Brésil, Vietnam ou Éthiopie.");
            rl.close(); // Fermer l'interface si l'entrée est invalide
            return;
        }

        // Demander la taille du café
        askQuestion("Choisissez la taille (expresso, long) : ", (size) => {
            // Vérifier si la taille est valide
            if (!['expresso', 'long'].includes(size)) {
                console.log("Taille invalide. Veuillez choisir entre expresso ou long.");
                rl.close(); // Fermer l'interface si l'entrée est invalide
                return;
            }

            // Demander les arômes spéciaux
            askQuestion("Ajoutez des arômes spéciaux (séparez par des virgules, ou laissez vide pour aucun) : ", (aroma) => {
                // Transformer la chaîne d'arômes en liste
                const aromaList = aroma ? aroma.split(',').map(a => a.trim()) : [];

                // Afficher un résumé de la commande
                console.log("\nPréparation de votre café...");
                console.log("- Provenance : " + origin);
                console.log("- Taille : " + size);
                console.log("- Arômes : " + (aromaList.length > 0 ? aromaList.join(', ') : 'Aucun'));

                console.log("\nVotre café est prêt ! Profitez bien !");
                rl.close(); // Fermer l'interface après la préparation
            });
        });
    });
}

// Démarrer la préparation du café
prepareCoffee();
