(() => {
  /*
  =================
  fonction anonyme
  =================
  */
})();
/* notre code ici */
let x = Number(10),
    y = String("10");
let total = x + y.length;
const code = parseInt(3.5);

const langs = ["fr", "it", "en"];
console.table(langs.length);

x === y ? console.log(true) : console.error(false);

/* Objet.méthode.propriété : values */
console.log(code); /* résultat de la variable x */
console.log(" Résultat " + total);
const lang = navigator.language;
console.log(lang);

/* OBJECT JS */

const User = {
  name: "Marrin",
  last_name: "Bob",
  age: null

};

Object.seal(User);
User.ville = "Paris"; /* empeche d'ajouter une nouvelle propriété */
delete Object.name; /* cela empeche de supprimer une propriété */
console.table(User);