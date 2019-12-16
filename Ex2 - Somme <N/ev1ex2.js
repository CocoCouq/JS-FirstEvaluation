var nb = parseInt(prompt("Calcul du nombre triangulaire de :"));
var som = 0;
while (--nb > 0) // Enlève le nombre lui-même
    var som = som + nb;
alert(som);
