/**
* 
* M413 - TD3 - Taquin Game
* * 
* @author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* @version	1.0
* @date			2021-01-31
*
*/
"use strict";

// M413 - Taquin
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	document.querySelector('div').querySelector('.box').addEventListener('click', selection)
}
// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

function selection(event) {

}
