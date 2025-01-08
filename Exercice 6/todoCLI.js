// Fichier : todoCLI.js

const fs = require('fs'); // Module pour gérer les fichiers
const readline = require('readline'); // Module pour interagir avec l'utilisateur via le terminal

// Création d'une interface pour lire les entrées utilisateur et afficher des sorties
const rl = readline.createInterface({
    input: process.stdin, // Lire l'entrée depuis le terminal
    output: process.stdout // Afficher les messages dans le terminal
});

const filePath = 'tasks.json'; // Chemin du fichier pour stocker les tâches

// Fonction pour lire les tâches depuis le fichier
function readTasks() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

// Fonction pour sauvegarder les tâches dans le fichier
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Fonction pour afficher le menu
function showMenu() {
    console.log("\n=== Gestionnaire de tâches ===");
    console.log("1. Ajouter une tâche");
    console.log("2. Afficher toutes les tâches");
    console.log("3. Supprimer une tâche");
    console.log("4. Supprimer toutes les tâches");
    console.log("5. Quitter\n");
}

// Fonction pour gérer l'ajout d'une tâche
function addTask() {
    rl.question("Entrez la description de la tâche : ", (description) => {
        const tasks = readTasks();
        tasks.push({ description });
        saveTasks(tasks);
        console.log("Tâche ajoutée avec succès !");
        main();
    });
}

// Fonction pour afficher toutes les tâches
function listTasks() {
    const tasks = readTasks();
    if (tasks.length === 0) {
        console.log("Aucune tâche enregistrée.");
    } else {
        console.log("\nListe des tâches :");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description}`);
        });
    }
    main();
}

// Fonction pour supprimer une tâche spécifique
function deleteTask() {
    listTasks();
    rl.question("Entrez le numéro de la tâche à supprimer : ", (index) => {
        const tasks = readTasks();
        const taskIndex = parseInt(index) - 1;
        if (taskIndex >= 0 && taskIndex < tasks.length) {
            tasks.splice(taskIndex, 1);
            saveTasks(tasks);
            console.log("Tâche supprimée avec succès !");
        } else {
            console.log("Numéro de tâche invalide.");
        }
        main();
    });
}

// Fonction pour supprimer toutes les tâches
function deleteAllTasks() {
    saveTasks([]);
    console.log("Toutes les tâches ont été supprimées.");
    main();
}

// Fonction principale pour afficher le menu et gérer les choix de l'utilisateur
function main() {
    showMenu();
    rl.question("Choisissez une option : ", (choice) => {
        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                listTasks();
                break;
            case '3':
                deleteTask();
                break;
            case '4':
                deleteAllTasks();
                break;
            case '5':
                console.log("Au revoir !");
                rl.close();
                break;
            default:
                console.log("Option invalide. Veuillez réessayer.");
                main();
        }
    });
}

// Démarrer l'application
main();
