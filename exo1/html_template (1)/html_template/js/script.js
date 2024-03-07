function askName() {
    let nomUtililisateur = prompt ("Quel est ton prénom? ");

    let hello = "👋 Bonjour " + nomUtililisateur;
    window.alert(hello);
    document.body.innerHTML += `<h2> ${hello}</h2>`;
    
}

var age = 0

function askBirthYear() {
    let birthYear = prompt("Quelle est ton année de naissance?");
    
    const birthNumber = Number(birthYear);
   
    age = 2024 - birthNumber;
}

function askBirthMonth() {
    let birthMonth = prompt("Quel est ton mois de naissance?");

    const monthNumber = Number(birthMonth);
    if (monthNumber >= 3) { 
        age = age - 1
    };
}

function presentation() {
    askName();
    askBirthYear();
    askBirthMonth();
    let haveAge = "Tu as " + age + " ans.";
    window.alert(haveAge);
    document.body.innerHTML += `<h3> ${haveAge}</h3>`;
}

presentation()

