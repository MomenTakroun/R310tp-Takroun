/**
* 
* R410 - TD2
* * 
* 	@author Momen Takroun
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date		2023-03-12
*
*/
"use strict";
debugger;

// R410 - TD2
let message = 'JavaScript is ok :)';

const savedPage = document.createElement("body");//Un élément body qui servira à stocker la page pour la fonction search()

let countSearch = 0;//Compteur de recherche réaliser par l'utilisateur
let tabOfObjectClicked = [];//Va être utilisé la fonction select pour voir qu'elles sur lesquelles on a déjà cliqué
let lastElementClick = undefined;//pour la fonction select 2
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//
	initSelect();
	addDiv();
	//Exercice 2
	document.getElementById('buttonSearch').addEventListener("click", search);
	document.getElementById('iSearch').addEventListener("input", interactiveSearch);
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

//6 Exercice 1

//6.1 Sélection d’un Objet

/**
 * Fonction qui ajoute un listener "click" sur le plus haut niveau de la page c'est-à-dire html
 */
function initSelect() {
	// Ajoute un écouteur d'évènements "click" à l'élément body
	document.querySelector('html').addEventListener('click', select3);
}

/**
 * Fonction qui ajoute fond rouge sur l'objet sur lequel on clique et le retire lorsqu'on reclique dessus
 * @param {*} event l'évènement déclanché
 */
function select(event) {
	let targetIndexInTab = tabOfObjectClicked.indexOf(event.target);
	if (targetIndexInTab === -1) {
		event.target.style.backgroundColor = "red";
		tabOfObjectClicked.push(event.target);
	} else {
		event.target.style.backgroundColor = "";
		tabOfObjectClicked.splice(tabOfObjectClicked.indexOf(event.target), 1);
	}
}

//6.2 Insertion d'objets
/**
 * Fonction qui ajoute une div avec un champ de texte et un select
 */
function addDiv() {
	let body = document.getElementsByTagName('body')[0];
	let newDiv = document.createElement('div');
	newDiv.setAttribute('id', 'insert-div');
	newDiv.innerHTML = '<select id="insert-type" name="type"><option value="div">div</option><option value="p">p</option><option value="span">span</option></select><input type="text" id="insert-text" value="My New Text Element">';
	body.insertBefore(newDiv, body.firstChild);
}

function select2(event) {
	if (event.target != document.getElementById('insert-div') && !event.target.closest('#insert-div')) {
		if (typeof lastElementClick !== "undefined") {
			lastElementClick.style.backgroundColor = "";
		}
		if (event.target != lastElementClick) {
			event.target.style.backgroundColor = "blue";
			lastElementClick = event.target;
			if (event.target.nodeName != "HTML") insertElement(event.target);
		}
	}

}

function insertElement(target) {
	// Récupère les valeurs du formulaire
	let type = document.getElementById('insert-type').value;
	let text = document.getElementById('insert-text').value;

	// Crée le nouvel élément
	let newElement = document.createElement(type);
	let textNode = document.createTextNode(text);
	newElement.appendChild(textNode);

	// Insère le nouvel élément avant l'élément cible
	target.parentNode.insertBefore(newElement, target);
}

//Exercice 2
/**
 * Fonction qui restaure la page en ajoutant les listners qui se sont supprimer lors de la sauvegarde
 */
function restorePage() {
	document.body.innerHTML = savedPage.innerHTML;
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
				let s = document.createElement(actualNode.childNodes[i].tagName);
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
	if (searchedText == "") {
		restorePage();
		document.getElementById('search').focus();
	} else {
		if (countSearch === 0) {
			savedPage.innerHTML = document.body.innerHTML //sauvegarde de la page
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
			savedPage.innerHTML = document.body.innerHTML //sauvegarde de la page
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

//Exercice 3
function select3(event) {
	let targetIndexInTab = tabOfObjectClicked.indexOf(event.target);
	if (targetIndexInTab === -1) {
		event.target.style.backgroundColor = "red";
		if (!tabOfObjectClicked.includes(event.target.parentNode) && event.target.nodeName != "HTML") event.target.parentNode.style.backgroundColor = "orange";
		tabOfObjectClicked.push(event.target);
	} else {
		event.target.style.backgroundColor = "";
		let childSelected = false;
		(event.target.childNodes).forEach(element => {
			if (tabOfObjectClicked.includes(element)) {
				event.target.style.backgroundColor = "orange";
				childSelected = true;
			}
		});
		if (!childSelected) event.target.style.backgroundColor = "";
		if (!tabOfObjectClicked.includes(event.target.parentNode) && event.target.nodeName != "HTML") event.target.parentNode.style.backgroundColor = "";
		tabOfObjectClicked.splice(tabOfObjectClicked.indexOf(event.target), 1);
	}
}