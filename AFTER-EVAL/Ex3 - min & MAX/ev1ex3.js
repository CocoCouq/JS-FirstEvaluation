var tab = Array();
var i = -1;

while (tab[++i - 1] != 0)
    tab[i] = parseInt(prompt("Saisissez le nombre n°" + (i + 1) + "\nSaisissez 0 pour arrêter"));
i -= 2;      /* Supprime le dernier passage de la boucle et le '0'*/
var min = tab[i];
var max = min;
var somme = min;  // +SUPPLEMENT+ somme avec min pour la décrémentation en début de boucle
var len = tab.length - 1; // +SUPPLEMENT+ cases du tableau pour moyenne (-1 pour enlever le '0' de fin de saisie)
while (--i != -1) /* Je décrémente en début de boucle car min et max déjà == à tab[i] */
{
    if (tab[i] < min)
        min = tab[i];
    if (tab[i] > max)
        max = tab[i];
    somme += tab[i];
}
alert("Le minimum est : " + min + "\nLe maximum est : " + max);
alert("La somme : " + somme + "\nLa moyenne : " + (somme / len));
