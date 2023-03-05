'use strict';
debugger;

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

const savedPage = document.createElement("body");//Un élément body qui servira à stocker la page pour la fonction search()

let countSearch = 0;//Compteur de recherche réaliser par l'utilisateur


function onLoad() {
	console.log('In onLoad() function…');
	//Exercice 1
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	//Exercice 2
	getNbDays();
	updateClock1();
	updateClock2();
	window.setInterval(updateGraphicClock, 1);
	window.setInterval(updateGraphicClockBonus, 1);
	//Exercice 3
	listenerOnInput();
	navMenu();
	//Exercice 4
	document.getElementById('buttonSearch').addEventListener("click", search);
	document.getElementById('iSearch').addEventListener("input", interactiveSearch);
	savedPage.innerHTML = document.body.innerHTML //sauvegarde de la page
}

//6 Exercice 1 : Commençons avec l’objet document
//6.1 La propriété « document.title »

/**
 * Fonction qui recherche une balise avec l'id title et change le titre de la page avec son contenu
 */
function defineHeading1() {
	document.title = document.getElementById('title').textContent;
}

/**
 * Fonction qui change le titre de la page avec le contenu de la première balise h2
 */
function defineHeading2() {
	document.title = document.getElementsByTagName('h2')[0].textContent;
}

/**
 * Fonction qui change le titre de la page avec le contenu de la dernière balise h2 si il y en a sinon il met le nom et le prénom
 */
function defineHeading3() {
	document.title = document.getElementsByTagName('h2').length > 0 ? document.getElementsByTagName('h2')[document.getElementsByTagName('h2').length - 1].textContent : 'Takroun Momen';
}

/**
 * Fonction qui recherche une balise avec l'id title et change le titre de la page avec son contenu
 */
function defineHeading4() {
	let firstOrLast = document.getElementsByClassName('firstOrLast');
	if (firstOrLast.length > 0) {
		document.title = firstOrLast.length % 2 != 0 ? firstOrLast[firstOrLast.length - 1].textContent : firstOrLast[0].textContent;
	} else {
		document.title = "Takroun Momen";
	}
}


//6.2 Les propriétés innerHTML, innerText ettextContent

/**
 * Fonction qui échange le contenu des 2 balises p situé après le les balises h3
 */
function swapInnerHTML() {
	let textP1 = document.getElementsByTagName('p')[0].innerHTML;
	document.getElementsByTagName('p')[0].innerHTML = document.getElementsByTagName('p')[1].innerHTML;
	document.getElementsByTagName('p')[1].innerHTML = textP1;
}

//6.3 La propriété document.lastModified

/**
 * Fonction qui indique la date de la dernière modification de la page et son auteur
 */
function dateAlter() {
	let date = new Date(document.lastModified);
	let localDate = date.toLocaleString('fr-FR', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});
	let metaTab = document.getElementsByTagName('meta');
	for (let i = 0; i < metaTab.length; i++) {
		if (metaTab[i].getAttribute('name') == "author") {
			document.getElementById("update-date").textContent = "Dernière modification : le " + localDate + " par " + metaTab[i].getAttribute('content');
			break;
		}
	}
}

// 7 Exercice 2 : l’objet Date

/**
 * Fonction qui retourne le nombre de jours restant avant le 19 juillet
 */
function getNbDays() {
	let actualDate = new Date();
	//On ajoute l'année dans le texte
	let year = actualDate.getFullYear();
	document.getElementById('nbDays').textContent = document.getElementById('nbDays').textContent.replace('202x', year);
	//On calcule la différence de jour entre le 19 juillet et la date actuelle
	let comparedDate = new Date(year, 6, 19)
	let daysRemaining = Math.ceil((comparedDate - actualDate) / 1000 / 60 / 60 / 24);
	//on ajoute le nombre de jours restants au texte
	document.getElementById('nbDays').textContent = document.getElementById('nbDays').textContent.replace('xxx', daysRemaining);
	//Le cas où le nombre de jours restant vaut 1
	if (daysRemaining == 1) {
		document.getElementById('nbDays').textContent = document.getElementById('nbDays').textContent.replace("jours", "jour");
	}
}

/**
 * Fonction qui donne dynamiquement l'heure avec setInterval
 */
function updateClock1() {
	let intervalID;
	intervalID = window.setInterval(() => {
		let date = new Date();
		let localDate = date.toLocaleTimeString('fr-FR', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		});
		document.getElementById("clock").innerHTML = "<b>updateClock1</b>: " + localDate;
	}, 1000);
}

/**
 * Fonction qui donne dynamiquement l'heure avec setTimeout
 */
function updateClock2() {
	let timeoutID;
	timeoutID = window.setTimeout(function () {
		let date = new Date();
		let localDate = date.toLocaleTimeString('fr-FR', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		});
		document.getElementById("clock2").innerHTML = "<b>updateClock2</b>: " + localDate;
		updateClock2();
	}, 1000);
}

/**
 * Fonction qui affiche l'heure dynamiquement mais avec des éléments graphiques
 */
function updateGraphicClock() {
	let actualClock = document.getElementById('clock').textContent;
	actualClock = actualClock.replace('updateClock1: ', '');
	actualClock = actualClock.replace(':', '');
	actualClock = actualClock.replace(':', '');
	for (let i = 0; i < actualClock.length; i++) {
		let b = document.getElementById('graphic-clock').getElementsByTagName('div')[i].getElementsByTagName('img');
		b[0].src = "../assets/images/" + actualClock[i] + ".gif";

	}
}

/**
 * Fonction qui affiche l'heure dynamiquement mais sous la forme d'une horloge
 */
function updateGraphicClockBonus() {
	let date = new Date();
	let hours = ((date.getHours() + 11) % 12 + 1);
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let hour = hours * 30;
	let minute = minutes * 6;
	let second = seconds * 6;

	document.getElementById('needleHour').style.transform = `rotate(${hour}deg)`;

	document.getElementById('needleMinute').style.transform = `rotate(${minute}deg)`;

	document.getElementById('needleSecond').style.transform = `rotate(${second}deg)`;
}

//8 Exercice 3 : HTML, CSS et JavaScript
//8.1 Champ Texte et Couleur d’arrière-plan

/**
 * Fonction qui vérifie et indique à l'utilisateur que les caractères autres que les chiffres ne sont pas autorisés
 */
function listenerOnInput() {
	let inputText = document.getElementById('background');
	inputText.addEventListener('input', () => {
		if (inputText.value.match(/^([1-9]+)$/)) {
			inputText.className = 'green';
		} else if (inputText.value.length != 0) {
			inputText.className = 'red';
		} else {
			inputText.className = 'white';
		}
	});
}


//8.2 Menu déroulant
/**
 * Menu déroulant avec image cliquable
 */
function navMenu() {
	let images = document.getElementsByTagName('aside')[0].getElementsByTagName('img');
	let span = document.getElementsByTagName('aside')[0].getElementsByClassName('spanNav');
	for (let i = 0; i < images.length; i++) {
		if (images[i].getAttribute('src') == null) {
			images[i].src = "/assets/images/plus.gif";
		}
		images[i].addEventListener("click", () => {
			if (images[i].getAttribute('src') == "/assets/images/minus.gif") {
				images[i].src = "/assets/images/plus.gif";
				span[i].style.display = "none";
			} else {
				images[i].src = "/assets/images/minus.gif"
				span[i].style.display = "block";
			}
		});
	}
}


//9 Exercice 4 : parcours de l’arbre DOM

/**
 * Fonction qui restaure la page en ajoutant les listners qui se sont supprimer lors de la sauvegarde
 */
function restorePage() {
	document.body.innerHTML = savedPage.innerHTML;
	listenerOnInput();
	navMenu();
	document.getElementById('buttonSearch').addEventListener("click", search);
	document.getElementById('iSearch').addEventListener("input", interactiveSearch);
}

/**
 * Fonction récursif qui permet de remplacer le texte recherché par le background jaune le tout en traversant tous les noeuds du DOM
 * @param {*} actualNode Le noeud sur lequel on se trouve 
 * @param {*} searchedText  Le texte recherché
 */
function replaceSearchedText(actualNode, searchedText) {
	for (let i = 0; i < actualNode.childNodes.length; i++) {
		if (actualNode.childNodes[i].textContent.includes(searchedText)) {
			if (actualNode.childNodes[i].childNodes.length >= 1) {
				replaceSearchedText(actualNode.childNodes[i], searchedText);
			} else {
				var s = document.createElement(actualNode.childNodes[i].tagName);
				let temp = actualNode.childNodes[i].textContent.split(searchedText);
				s.innerHTML = temp.join('<span class="select">' + searchedText + '</span>');
				actualNode.replaceChild(s, actualNode.childNodes[i]);
			}
		}
	}
}

/**
 * Fonction qui recherche le contenu du champ texte sur toute la page
 */
function search() {
	let searchedText = document.getElementById('search').value;
	if (searchedText != "") {
		if (countSearch === 0) {
			countSearch++;
			document.getElementById('search').focus();
			let body = document.body;
			(body.childNodes).forEach(element => {
				if (element.nodeType === element.ELEMENT_NODE) {
					replaceSearchedText(element, searchedText);
				}
			});
		} else {
			restorePage();
			document.getElementById('search').focus();
			document.getElementById('search').value = searchedText;
			let body = document.body;
			(body.childNodes).forEach(element => {
				if (element.nodeType === element.ELEMENT_NODE) {
					replaceSearchedText(element, searchedText);
				}
			});
		}
	}
}


/**
 * Fonction qui recherche interactivement le contenu du champ texte sur toute la page
 */
function interactiveSearch() {
	let searchedText = document.getElementById('iSearch').value;
	if (searchedText == "" && countSearch != 0) {
		restorePage();
		document.getElementById('iSearch').focus();
	} else {
		if (countSearch == 0) {
			countSearch++;
			let body = document.body;
			(body.childNodes).forEach(element => {
				if (element.nodeType === element.ELEMENT_NODE) {
					replaceSearchedText(element, searchedText);
				}
			});
		} else {
			restorePage();
			document.getElementById('iSearch').focus();
			document.getElementById('iSearch').value = searchedText;
			(document.body.childNodes).forEach(element => {
				if (element.nodeType === element.ELEMENT_NODE) {
					replaceSearchedText(element, searchedText);
				}
			});
		}
	}
}
