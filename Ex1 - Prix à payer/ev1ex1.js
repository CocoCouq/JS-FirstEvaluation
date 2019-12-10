//  Recueil infos en valeurs numeriques
var PU = parseInt(prompt("Quel est le prix d'un produit ?"));
var QTECOM = parseInt(prompt("Quel est la quantité de produits ?"));
var TOT = PU * QTECOM;
var PORT = 0;     /* A '0' pour le cas où > 500€ */
var REM = 0;     /* A '0' pour le cas où 100€ <> 200€ */

//  Calcul des frais et remises
if (TOT < 500)      /* Calcul de PORT */
{
    PORT = (TOT * 0.02);
    if (PORT < 6)
        PORT = 6;
}
if (TOT >= 100)      /* Calcul de REM */
{
    if (TOT <= 200)
        REM = (TOT * 0.05);
    else
        REM = (TOT * 0.1);
}

//  Calcul Prix a payer
var PAP = TOT + PORT - REM;
alert("Le prix à payer est de : " + PAP);
