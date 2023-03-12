# M413 - TD2 : Réponses aux Questions

# Exercice 1 : Les évènements
### 6.1 Sélection d’un Objet
    ➢ Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?
        J'ai utilisé body.addEventListener('click', select) sur l'objet html.

    ➢ Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?
        Si on utilise currentTarget à la place de target c'est tout le body qui change couleur et pas seulement l'objet sur lequel on click (current est donc l'objet qui à l'écouteur d'évènement)

### 6.2 Insertion d'objets   
    ➢ Comment avez-vous ajouté l’élément ?
    Je récupère d'abord le type de balise et le text à ajouter avec document.getElementById('insert-type').value; et document.getElementById('insert-text').value; puis je crée un élément avec son texte à l'aide createElement et createTextNode puis j'ajoute le textNode à la balise avec appendChild et enfin j'utilise event.target.parentNode.insertBefore(newElement, event.target); .


    ➢ Comment avez-vous fait pour que la fonction select2() ignore les évèments de la \<div> donnée ci-dessus ?
    J'ai ajouté event.target != document.getElementById('insert-div') && !event.target.closest('#insert-div') dans if au début de la fonction. Cela permet d'ignorer la div et ce qu'il y a à l'intérieur