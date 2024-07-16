// Etape 1 - Création d'une variable contenant la chaîne de caractères qui sera analysée par l'expression régulière
const str = "J'utilise les expressions regulière pour retrouver des schémas de texte au sein d'une chaîne de caractères."

//Création d'une constante contenant la RegExp qui permettra de renvoyer le nombre de fois où le mot de est utilisé dans la chaîne de caractères

//const exp = /\sde\s/g        utilisation de l'opérateur g (pour global) afin que l'expression retourne toutes les occurrences
//console.log(str.match(exp).length)

//ajouter un opérateur logique OR (|) pour avoir dans le même résultat le nombre articles "de" et "des".

const exp = /\bdes|\bde/g
console.log(str.match(exp).length)