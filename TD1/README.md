# M413 - TD1 : Réponses aux Questions

# Exercice 1
-  Quel sera l’évènement qui déclenchera l’appelle de votre fonction?

    L'évènement qui déclenchera la fonction sera le chargement de la page.

- Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1>?

    J'ai utilisé document.getElementById('title').

-  Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ?

    J'ai utilisé document.getElementById('title').textContent.

-  Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise <h2> ?

    J'ai utilisé document.getElementsByTagName('h2')[0].

-  Comment faire pour connaitre le nombre de balise <h2> du document ?

    Avec document.getElementsByTagName('h2').length.

-  Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?
    
    Avec document.getElementsByClassName('firstOrLast').

-  Comment avez-vous déterminé si un nombre est pair ?

    Avec document.getElementsByClassName('firstOrLast').length % 2 == 0.

- Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?

    innerHTML récupère le texte avec les balises HTMl (<span> dans notre code) alors que innerText et textContent récupère uniquement le texte. La différence entre les 2 dernières propriétés et que textContent a été standardisée et est supportée par plus de naviguateur que innerText.

- Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?

    for (let i = 0; i < metaTab.length; i++) {
		if (metaTab[i].getAttribute('name') == "author") {
			author = metaTab[i].getAttribute('content');
			break;
		}
	}

- Même question avec le dernier auteur de la liste.

    for (let i = metaTab.length - 1; i > -1; i--) {
		if (metaTab[i].getAttribute('name') == "author") {
			author = metaTab[i].getAttribute('content');
			break;
		}
	}

# Exercice 2
- Comment obtenez-vous le nombre de jours ?

    Je fais comparedDate - actualDate (qui retourne la différence en millisecond) puis je divise par 1000 puis par 60 puis par 60 et enfin par 24 et j'arrondis au supérieur.

- Comment faites-vous la mise à jour du texte ?

    Je fais  document.getElementById('days').textContent = document.getElementById('days').textContent.replace('202x', year); et document.getElementById('days').textContent = document.getElementById('days').textContent.replace('xxx', daysRemaining); .

- Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?

    Je préfère utiliser setInterval car il met à jour l'heure dynamiquement (en exécutant la fonction updateClock1 à chaque fois selon un temps donné après le chargement de la page) alors que setTimeout ne fais que exécuter 1 fois la fonction selon un temps donné après l'éxécution de la page.

-  Quel évènement avez-vous utilisé ?

    J'ai utilisé document.getElementById('background').addEventListener('input', () => { changeBackground() });

- Comment avez-vous fait changer la couleur du champ texte ?

    J'ai ajouté une classe à l'input et j'utilise document.getElementById('background').className = 'green'; (exemple) pour changer

