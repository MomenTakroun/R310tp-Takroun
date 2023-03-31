"use strict";
debugger;

// R410 - TD2
let message = 'JavaScript is ok :)';

//1.1 Création	d’un	objet	littéral
//a
const personne = {
    nom: "Doe",
    prenom: "John",
    age: 30,
    taille: 175,
  };

//b
personne = {};
personne.nom = "Doe";
personne.prenom = "John";
personne.age = 30;
personne.taille = 175;

//C
const x = personne;
x.nom="SIUU";
console.log(x.nom);
console.log(personne.nom);
//Cela signifie que x et personne partagent les mêmes données et que toute modification apportée à l'un affectera l'autre

//1.2 Accès aux propriétés d'un objet
//a
console.log(personne.nom);
console.log(personne.age);

console.log(personne['prenom']);
console.log(personne['taille']);

const keys = Object.keys(personne);
keys.forEach(key => {
  console.log(`${key}: ${personne[key]}`);
});

//b
for (let key in personne) {
  console.log(`${key}: ${personne[key]}`);
}

//c

personne.poids = 75;


//d
delete personne.poids;

//1.3 Objets imbriqués (nested en anglais)
//a
personne.sports = {
  sport1: "football",
  sport2: "basketball",
  sport3: "tennis"
};

//b
console.log(personne.sports.sport1);
console.log(personne["sports"]["sport2"]);
console.log(personne.sports["sport3"]);

//c
for (let sport in personne.sports) {
  console.log(sport + ": " + personne.sports[sport]);
}

//d
personne.sports = [
  { nom: "football", equipements: ["ballon", "crampons"] },
  { nom: "basketball", equipements: ["ballon", "panier"] },
  { nom: "tennis", equipements: ["raquette", "balle", "filet"] }
];

for (let i in personne.sports) {
  console.log("Nom: " + personne.sports[i].nom);
  console.log("Equipements: " + personne.sports[i].equipements);
}


//1.4 Les méthodes