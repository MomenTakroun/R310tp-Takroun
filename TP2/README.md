# M413 - TD2 : Réponses aux Questions

# Exercice 1 : Les évènements
### 6.1 Sélection d’un Objet
    ➢ Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?
        J'ai utilisé body.addEventListener('click', select) sur l'objet html.

    Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?
        Si on utilise currentTarget à la place de target c'est tout le body qui change couleur et pas seulement l'objet sur lequel on click (current est donc l'objet qui à l'écouteur d'évènement)