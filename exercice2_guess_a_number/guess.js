//gameplay joueur 1 - doit donner un nombre à faire deviner au joueur 2
function askRange() {
  let numberToChoose = -1
  do {
    numberToChoose = (window.prompt("Donne moi un nombre à deviner entre 0 et 50", ""));
  } while (numberToChoose < 0 || numberToChoose > 50 || isNaN(numberToChoose));

  window.alert("Tu as choisi " + numberToChoose);
  return numberToChoose;
}

// //gameplay joueur 2 - doit saisir un nombre entre 0 et 50 et permet de récupérer la valeur
function askNumber() {
  let givenNumber = Number(document.getElementById("numberPlayer2").value);
  console.log(givenNumber);
  return givenNumber;
}


const winNumber = askRange(); // rappelle la valeur du joueur un dans une variable
let givenNumber = askNumber(); // rappelle la valeur du joueur deux dans une variable

// fonction permettant de comparer la valeur des deux joueurs, de renvoyer true  et alert ou false avec message d'erreuret reset de l'input du joueur 2
function didIWin(givenNumber) {
  if (givenNumber == winNumber) {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
  else if (givenNumber > winNumber && givenNumber < 51) {
    alert("Plus petit!");
    document.getElementById("numberPlayer2").reset();
    return false;
  }
  else if (givenNumber < winNumber && givenNumber > -1) {
    alert("Plus grand!");
    document.getElementById("numberPlayer2").reset();
    return false;
  }
  else {
    alert("Je te rappelle que tu dois trouver un nombre entre 0 et 50!");
    document.getElementById("numberPlayer2").reset();
    return false;
  }
}

//fonction permettant la gestion du jeu et des appels de fonction
function gamePlay() {
  let givenNumber = askNumber();

  while (didIWin(givenNumber) == false) {
    askNumber();
  }
  return "bien joué";
}

