var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// Tableau imposé
var prenom = prompt("Entrez le prénom à supprimer de la liste : ")
var len = tab.length - 1;     /* -1 pour correspondre à i du tab */
var lenchaine;
var i = -1;
var j = -1;
var jBis = 0;
var save = 0;

while (++i != (len + 1) && save != lenchaine)
{
    lenchaine = (tab[i]).length - 1;
    while (++j != lenchaine)
    {
      if(tab[i][j] == prenom[j])     /* Compte le nombre de caractères = */
          jBis++;
    }
    if (jBis == lenchaine)       /* Sauve jBis pour le tester après le boucle */
        save = jBis;             /*           malgré remise à zero            */
    jBis = 0;
    j = -1;
}
i -= 2;                           /* -1: rester sur nom  -1: boucle dessous */
if(save == lenchaine)             /* Si la chaine est égal : Tableau change */
{
    while (++i != len)
        tab[i] = tab[i + 1];
    tab[i] = [""];                /*        Laisser "une case à blanc"      */
}
alert(tab);
