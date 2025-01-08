# Exercice : Liste de Tâches (ToDo) via une Application CLI

## Objectif

Créer une application en ligne de commande (CLI) permettant de gérer une liste de tâches. L'utilisateur doit pouvoir :

- Créer et sauvegarder une tâche dans un fichier.
- Lire toutes les tâches sauvegardées.
- Supprimer une tâche spécifique.
- Supprimer toutes les tâches du fichier.

## Fonctionnalités demandées

### Ajouter une tâche :

L'utilisateur saisit une description pour une nouvelle tâche, qui est ensuite sauvegardée dans un fichier.

### Afficher toutes les tâches :

L'utilisateur peut consulter la liste complète des tâches sauvegardées.

### Supprimer une tâche spécifique :

L'utilisateur indique le numéro d'une tâche pour la supprimer de la liste.

### Supprimer toutes les tâches :

Efface toutes les tâches sauvegardées dans le fichier.

## Étapes de réalisation

### Créer le fichier principal :

- **Nom du fichier** : `todoCLI.js`.
- Ajouter les fonctionnalités décrites ci-dessus.

### Gérer les tâches dans un fichier JSON :

- Utiliser le module `fs` de Node.js pour lire et écrire dans un fichier `tasks.json`.

### Interagir avec l'utilisateur via le terminal :

- Utiliser le module `readline` pour recevoir les entrées de l'utilisateur.

## Exemple d'utilisation

### Ajouter une tâche
```bash
node todoCLI.js
Choisissez une option : 1
Entrez la description de la tâche : Acheter du pain
Tâche ajoutée avec succès !
```

### Afficher toutes les tâches
```bash
node todoCLI.js
Choisissez une option : 2
Liste des tâches :
1. Acheter du pain
2. Réviser pour l'examen
```

### Supprimer une tâche
```bash
node todoCLI.js
Choisissez une option : 3
Entrez le numéro de la tâche à supprimer : 1
Tâche supprimée avec succès !
```

### Supprimer toutes les tâches
```bash
node todoCLI.js
Choisissez une option : 4
Toutes les tâches ont été supprimées.
```

### Quitter l'application
```bash
node todoCLI.js
Choisissez une option : 5
Au revoir !
```

## Extensions possibles

- Ajouter une fonctionnalité pour marquer une tâche comme "terminée".
- Permettre de filtrer les tâches (par exemple, terminées ou non).
- Ajouter des catégories pour organiser les tâches.
- Permettre la modification d'une tâche existante.