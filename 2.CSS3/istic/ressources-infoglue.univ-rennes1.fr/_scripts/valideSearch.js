/**
 * @fichier script.js
 * @version 1.0.0.0
 * @auteur  Marc Francois Julien ...
 * @email   marc-francois.julien@univ-rennes1.fr
 * @date    01.02.2008
 * fichier modififie par O. germes le 21/11/2011 par copie du fichier equivalent dans l annuaire des formations
*/

/**
 * Fonction par VadideSearch
*/
function ValiderSearch(formulaire)
{
    var test = formulaire.__intitule_pt_AND.value;
    var domaine = formulaire.__domaine.value;
    var typ = formulaire.__diplome.value;
    if ((test.length<3)&&(formulaire.__domaine.value=="")&&(formulaire.__diplome.value=="")&&(formulaire.__cmp.value=="")) {
                alert("Veuillez s\351lectionner au moins un crit\350re de recherche ou saisir un mot cl\351");
    }
    else {
                formulaire.submit();
    }
}
function ValiderSearch2(formulaire)
{
    
    if (formulaire.__mention.value=="") {
                alert("Veuillez s\351lectionner une mention de master");
    }
    else {
                formulaire.submit();
    }
}
