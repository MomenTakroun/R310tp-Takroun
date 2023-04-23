"use strict";


// R410 - TD4
let message = 'JavaScript is ok :)';

//1.1 Création	d’un	objet	littéral
//a
const personne = {
  nom: "Takroun",
  prenom: "Momen",
  age: 20,
  taille: 175
};
document.getElementById("1.1.a").textContent = "a : " + JSON.stringify(personne);

//b
const personne1 = {};
personne1.nom = "Takroun";
personne1.prenom = "Momen";
personne1.age = 20;
personne1.taille = 175;
document.getElementById("1.1.b").textContent = "b : " + JSON.stringify(personne);

//c
const x = personne;
x.nom = "SIUU";
document.getElementById("1.1.c").textContent = "c (personne) : " + JSON.stringify(personne) +
  "et c (x) : " + JSON.stringify(x);
//Cela signifie que x et personne partagent les mêmes données et que toute modification apportée à l'un affectera l'autre


//1.2 Accès aux propriétés d'un objet
//a
x.nom = "Takroun";
const keys = Object.keys(personne);
document.getElementById("1.2.a").textContent = "a : Avec . :" + personne.nom + "; avec []" + personne['nom'] + "; avec Object.keys :" +
  personne[keys[0]];


//b
document.getElementById("1.2.b").textContent = "b : "
for (let key in personne) {
  document.getElementById("1.2.b").textContent += key + " = " + personne[key] + ", ";
}

//c
personne.poids = 75;
document.getElementById("1.2.c").textContent = "c : poids = " + personne.poids;


//d
delete personne.poids;
document.getElementById("1.2.d").textContent = "d : " + personne.poids;



//1.3 Objets imbriqués (nested en anglais)
//a
personne.sports = {
  sport1: "football",
  sport2: "basketball",
  sport3: "tennis"
};
document.getElementById('1.3.a').textContent = "a : " + personne.sports.sport1 + "," + personne.sports.sport2 + "," + personne.sports.sport3;

//b
document.getElementById('1.3.b').textContent = "b : " + personne.sports.sport1 + "," + personne["sports"]["sport2"] + "," + personne.sports["sport3"];

//c
document.getElementById('1.3.c').textContent = "c : ";
for (let sport in personne.sports) {
  document.getElementById('1.3.c').textContent += personne.sports[sport] + ","
}


//d
personne.sports = [
  { nom: "football", equipements: ["ballon", "crampons"] },
  { nom: "basketball", equipements: ["ballon", "panier"] },
  { nom: "tennis", equipements: ["raquette", "balle", "filet"] }
];

document.getElementById('1.3.d').textContent += "d : ";
for (let i in personne.sports) {
  document.getElementById('1.3.d').textContent += "sport" + i + " = " + personne.sports[i].nom + " et équipements = " + personne.sports[i].equipements + "; ";
}


//1.4 Les méthodes
//a
personne.qui = function () {
  document.getElementById('1.4.a').textContent = "a : Je suis " + this.prenom + " " + this.nom;
};
personne.qui();

//b
personne.quimaj = function () {
  document.getElementById('1.4.b').textContent = "b : " + ("Je suis " + this.prenom + " " + this.nom).toUpperCase();
};
personne.quimaj();


//1.5 Affichage	
//a
document.getElementById("1.5.a").textContent = "a : " + Object.values(personne);

//b
document.getElementById("1.5.b").textContent = "b : " + JSON.stringify(personne);

//c
personne.datenaissance = new Date();
document.getElementById("1.5.c").textContent = "c : " + JSON.stringify(personne);



//Exercice	2 : Les	Accesseurs	&	Constructeurs

//2.1 Mise	en	place	de	setter	et	de	getter

// a
personne.langue = "français"
Object.defineProperty(personne, "getLang", {
  get: function () {
    return this.langue;
  }
});
document.getElementById
  ('2.1.a').textContent = "a : " + personne.getLang;

// b
Object.defineProperty(personne, "setLang", {
  set: function (newLanguage) {
    this.langue = newLanguage;
  }
});
personne.setLang = "arabe";
document.getElementById
  ('2.1.b').textContent = "b : " + personne.getLang;


//c. La différence entre le champ get fullName() {} et le champ fullName: function() {} est que le premier est un getter et le second est une méthode. Le getter est appelé comme une propriété de l'objet, sans qu'on doit utiliser les parenthèses, tandis que la méthode est appelée en utilisant les parenthèses.

//d
const obj = { counter: 0 };
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  }
});
Object.defineProperty(obj, "inc", {
  get: function () {
    this.counter++;
  }
});
Object.defineProperty(obj, "dec", {
  get: function () {
    this.counter--;
  }
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  }
});
Object.defineProperty(obj, "subs", {
  set: function (value) {
    this.counter -= value;
  }
});

obj.inc;
obj.inc;
document.getElementById
  ('2.1.d').textContent = "d :  incrémentation = " + obj.counter + ";  ";

obj.dec;
document.getElementById
  ('2.1.d').textContent += "décrémentation = " + obj.counter + "; ";

obj.reset;
document.getElementById
  ('2.1.d').textContent += "reset = " + obj.counter + "; ";

obj.add = 19;
document.getElementById
  ('2.1.d').textContent += "add = " + obj.counter + "; ";

obj.subs = 15;
document.getElementById
  ('2.1.d').textContent += "subs = " + obj.counter + "; ";


//2.2 Les	constructeurs
//a
function Personne(nom, prenom, age, couleurYeux) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.couleurYeux = couleurYeux;
}

//b
let pere = new Personne("Dupont", "Jean", 45, "bleu");
let mere = new Personne("Durand", "Marie", 42, "vert");
document.getElementById("2.2.b").textContent = "b : " + JSON.stringify(pere) + " et " + JSON.stringify(mere);

//c
Personne.prototype.name = function () {
  return this.nom + " " + this.prenom;
};
document.getElementById('2.2.c').textContent = "c : père = " + pere.name() + ";  mère = " + mere.name();

//d
Personne.prototype.setNom = function (newNom) {
  this.nom = newNom;
};
pere.setNom("SIUU");
document.getElementById('2.2.d').textContent = "d : père = " + pere.name();

//e
let var1 = "duhr";
let var2 = "qsdq";
document.getElementById('2.2.e').textContent = "e : var1.length = " + var1.length + " et var2.length = " + var2.length;


//f
// arrondir un nombre à l'entier le plus proche
let b = 2.5;
document.getElementById("2.2.f").textContent = "f : arrondis à l'entier le plus proche de 2.5 = " + Math.round(b) + "; ";

// arrondir un nombre à l'entier inférieur
let y = 3.7;
document.getElementById("2.2.f").textContent += " arrondis de 3.7 à l'entier inférieur = " + Math.floor(y) + "; ";

// trouver le plus grand nombre dans un ensemble de nombres
let z = [1, 4, 3, 8, 2];
document.getElementById("2.2.f").textContent += " le nombre le plus grand du tableau [1, 4, 3, 8, 2] = " + Math.max(...z);


//Exercice 3
//a
Personne.prototype.nationalite = "française";
document.getElementById('3.a').textContent = "a : nationalité du père = " + pere.nationalite;

//b
Personne.prototype.name = function () {
  return "Je suis " + this.nom + " " + this.prenom;
}
document.getElementById('3.b').textContent = "b : " + pere.name();


//3.1
// a.
function Personne2(nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
  this.estomac = [];
}

mere = new Personne2("Sarah", "Croche");
// b.
Personne2.prototype.manger = function (nourriture) {
  if (this.estomac.length < 10) {
    this.estomac.push(nourriture);
    return nourriture + " a été ajouté à l'estomac de " + this.nom + " " + this.prenom + ".";
  } else {
    return this.nom + " " + this.prenom + " ne peut plus manger " + nourriture + ". Son estomac est plein.";
  }
}
document.getElementById('3.1.b').textContent = "b :" + mere.manger("carrote");

//On remplis l'estomac de mère
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
mere.manger("lardons");
document.getElementById('3.1.b').textContent += ";   " + mere.manger("concombre");

// c.
Personne2.prototype.digestionOK = function () {
  this.estomac = [];
  return "L'estomac de " + this.nom + " " + this.prenom + " a été vidé.";
}
document.getElementById('3.1.c').textContent = "c : vidage de l'estomac de la mère : " + mere.digestionOK() + " et on la fait manger : " + mere.manger("concombre");

// d.
Personne2.prototype.name = function () {
  return "Je suis " + this.nom + " " + this.prenom.toUpperCase() + ".";
}
document.getElementById('3.1.d').textContent = "d : " + mere.name();


//3.2
//a
function Car(modele, conso100km) {
  this.modele = modele;
  this.conso100km = conso100km;
  this.reservoirlitre = 0;
  this.compteurkm = 0;
}

let car1 = new Car("Renault", 10);

//b
Car.prototype.addfuel = function (nblt) {
  this.reservoirlitre += nblt;
}
car1.addfuel(200);
document.getElementById("3.2.b").textContent = "b : " + JSON.stringify(car1);

let car2 = new Car("Renault", 100);
car2.addfuel(200);

//c
Car.prototype.drive = function (nbkm) {
  var maxdist = this.reservoirlitre / (this.conso100km / 100);
  if (maxdist < nbkm) {
    this.compteurkm += maxdist;
    this.reservoirlitre = 0;
    return "Je serai à cours de carburant dans " + maxdist + " km";
  } else {
    this.compteurkm += nbkm;
    this.reservoirlitre -= nbkm * (this.conso100km / 100);
    return "J'ai parcourus " + nbkm + " km."
  }
}
document.getElementById("3.2.c").textContent = "c : car1=" + car1.drive(200) + " " + JSON.stringify(car1);
document.getElementById("3.2.c").textContent += "; car2=" + car2.drive(300) + " " + JSON.stringify(car2);

//3.3
//a
function Baby(nom, prenom, age, couleuryeux, jouetFavori) {
  Personne.call(this, nom, prenom, age, couleuryeux);
  this.jouetFavori = jouetFavori;
}

Baby.prototype = Object.create(Personne.prototype); // définir le prototype de Baby comme étant une instance de Personne
Baby.prototype.constructor = Baby; // définir le constructeur de Baby comme étant lui-même

//b
let bebe = new Baby("Dupont", "Jean", 1, "bleu", "Figurine Luffy");

//c
Baby.prototype.jouer = function () {
  return "Je joue avec mon jouet favori " + this.jouetFavori;
}

document.getElementById('3.3.c').textContent = bebe.jouer();