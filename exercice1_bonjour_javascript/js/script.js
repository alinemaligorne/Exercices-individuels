// Fonction pour demander le prénom de l'utilisateur et l'afficher en haut de la page HTML avec un h2 
function askName() {
    let nomUtililisateur = prompt("Quel est ton prénom? ");

    let hello = "👋 Bonjour " + nomUtililisateur;
    window.alert(hello);
    document.body.innerHTML += `<h2> ${hello}</h2>`;

}

// Création de la variable avec une initialisation à 0 pour que la valeur attendue soit un nombre, déclarée hors fonction pour avoir une portée globale 
let age = 0

// Fonction pour demander l'année de naissance de l'utilisateur et lui afficher son age, mais ne prend pas en compte le mois de naissance
function askBirthYear() {
    let birthYear = prompt("Quelle est ton année de naissance?");

    const birthNumber = Number(birthYear);

    age = 2024 - birthNumber;
}

// constante date qui contient la date du jour
const date = new Date();

// constante actualMonth qui contient le mois en cours et le convertit en nombre, +1 car le mois commence à 0
const actualMonth = Number((date.getMonth()) + 1);

// Fonction pour demander le mois de naissance de l'utilisateur et calculer son âge si le mois de naissance est plus grand que le mois en cours
function askBirthMonth() {
    let birthMonth = prompt("Quel est ton mois de naissance?");
    const monthNumber = Number(birthMonth); // Convertit le mois de naissance de l'utilisateur en nombre
    if (monthNumber >= actualMonth) {
        age = age - 1
    };
}

// Fonction de rappel des fonctions précédentes et qui affiche une balise html h3 avec une chaîne de caractère qui indique son âge à l'utilisateur
function presentation() {
    askName();
    askBirthYear();
    askBirthMonth();
    let haveAge = "Tu as " + age + " ans.";
    window.alert(haveAge);
    document.body.innerHTML += `<h3> ${haveAge}</h3>`;
}

presentation()