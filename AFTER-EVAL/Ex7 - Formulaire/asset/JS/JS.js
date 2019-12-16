//              FONCTION VERIFICATION FORMULAIRE

// +SUPPLEMENT+ Suppression de tous les innerHTML
function    verif()
{
//  Nom
    var filtreNom = /^[a-zA-ZéèïëéÉ_-\s]+$/;
    var nom = document.getElementById("rep1").value;
    if(!filtreNom.test(nom))
    {
        document.getElementById("errNom").textContent = "Entrez un nom valide";
        return false;
    }
    else   // Retour à zero si remplis par la suite
        document.getElementById("errNom").textContent= "";


//      Pour mieux m'y retrouver, je ne fais pas de lastIndex,
//      je déclare un new RegExp à chaque verif().

//  Prénom
    var filtrePrenom = /^[a-zA-ZéèïëéÉ_-\s]+$/;
    var prenom = document.getElementById("rep2").value;
    if(!filtrePrenom.test(prenom))
    {
        document.getElementById("errPrenom").textContent = "Entrez un prénom valide.";
        return false;
    }
    else
        document.getElementById("errPrenom").textContent = "";
//  Email
    var filtreMail = /([\w.]+@[\w.]+.{1}[\w]+)/;
    var mail = document.getElementById("rep3").value;
    if (!filtreMail.test(mail))
    {
        document.getElementById("errMail").textContent = "Renseignez un email contenant au moins '@' et '.'";
        return false;
    }
    else
        document.getElementById("errMail").textContent = "";
//  Sujet
    if (document.getElementById("rep4").value == "CHOIX")
    {
        document.getElementById("errSuj").textContent = "Choisissez le sujet de votre requête";
        return false;
    }
    else
        document.getElementById("errSuj").textContent = "";

//  Question
    if (document.getElementById("rep5").value == "")
    {
        document.getElementById("errQuest").textContent = "Vous n'avez saisi aucune question";
        return false;
    }
    else
        document.getElementById("errQuest").textContent = "";
}
