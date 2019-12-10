//              FONCTION VERIFICATION FORMULAIRE
function    verif()
{
//  Nom
    var filtreNom = /^[a-zA-Z]+$/;
    var nom = document.getElementById("rep1").value;
    if(!filtreNom.test(nom))
    {
        document.getElementById("errNom").innerHTML = "Utilisez uniquement des caractères alphabétiques.";
        return false;
    }
    else   // Retour à zero si remplis par la suite
        document.getElementById("errNom").innerHTML = "";

//      Pour mieux m'y retrouver, je ne fais pas de lastIndex,
//      je déclare un new RegExp à chaque verif().

//  Prénom
    var filtrePrenom = /^[a-zA-Z]+$/;
    var prenom = document.getElementById("rep2").value;
    if(!filtrePrenom.test(prenom))
    {
        document.getElementById("errPrenom").innerHTML = "Utilisez uniquement des caractères alphabétiques.";
        return false;
    }
    else
        document.getElementById("errPrenom").innerHTML = "";
//  Email
    var filtreMail = /([\w.]+@[\w.]+.{1}[\w]+)/;
    var mail = document.getElementById("rep3").value;
    if (!filtreMail.test(mail))
    {
        document.getElementById("errMail").innerHTML = "Renseignez un email contenant au moins '@' et '.' .";
        return false;
    }
    else
        document.getElementById("errMail").innerHTML = "";
//  Sujet
    if (document.getElementById("rep4").value == "CHOIX")
    {
        document.getElementById("errSuj").innerHTML = "Choisissez le sujet de votre requête.";
        return false;
    }
    else
        document.getElementById("errSuj").innerHTML = "";

//  Question
    if (document.getElementById("rep5").value == "")
    {
        document.getElementById("errQuest").innerHTML = "Vous n'avez renseigner aucun message.";
        return false;
    }
    else
        document.getElementById("errQuest").innerHTML = "";
}