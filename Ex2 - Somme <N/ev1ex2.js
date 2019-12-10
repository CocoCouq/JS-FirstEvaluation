// Ajout de 1 à nb pour décrémenté à l'entrée de la boucle
var nb = parseInt(prompt("Calcul du nombre triangulaire de :")) + 1;
var som = 0;
while (--nb > 0)
    var som = som + nb;
alert(som);
