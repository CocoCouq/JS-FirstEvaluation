var nb = 0;
var i = 0;      /* Afficher le numero de la saisie */
var mnsVngt = 0;
var plsQrnt = 0;
var ttl = 0;
while (nb != 100)
{
    nb = parseInt(prompt("Entrer l'âge de la personne numéro " + (++i)));
    if (nb < 20)
        mnsVngt++;
    if (nb > 40)
        plsQrnt++;
    ttl++;
}
alert("- de 20 ans : " + mnsVngt + "\n20ans - 40ans : " + (ttl - mnsVngt - plsQrnt) + "\n+ de 40ans : " + plsQrnt);
// Les 20-40ans sont inclus par le strictement des "<" et ">"
