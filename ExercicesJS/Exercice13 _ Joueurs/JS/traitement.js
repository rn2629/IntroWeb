
var NomJoueur, TabPoints = new Array(4),TabJoueur = new Array(4),NbPoints, Cpt = 0;


function btnAjouter_onclick()
{
Ajouter();
}

function Ajouter()
{
    NomJoueur = document.getElementById("txtNom").value;
    NbPoints = parseFloat(document.getElementById("txtPoints").value);
    TabJoueur [Cpt]= NomJoueur;
    TabPoints[Cpt]= NbPoints;
    Cpt++;
    document.getElementById("lblNbreJoueur").innerHTML = ("Numero de Joueur" + Cpt);

    if (Cpt > 3)
    {
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnRechercher").disabled = false;
    }

}

function btnTrouverMoy_onclick()
{
  res = Moyenne();
}

function Moyenne()
{
    var res;
    var  Total = 0, Moyenne = 0;

    for (var i =0; i<TabPoints.length ; i++)
    {
        Total += TabPoints[i] ;

    }

    Moyenne = Total/4;
    res = document.getElementById("lblReponse").innerHTML = "La moyenne est de:" + Moyenne;

    return  res;
}

function btnTrouverMeilleur_onclick()
{
    res = MeilleurP();
}

function MeilleurP()
{
    var MeilleurP;
    var MeilleurPoint = TabPoints[0];
    var NomMeilleurJoueur = TabJoueur[0];

    for (var i=0 ;i<TabPoints.length; i++)
    {
        if(MeilleurPoint<TabPoints[i])
        {
            MeilleurPoint = TabPoints[i];
            NomMeilleurJoueur = TabJoueur[i];
        }
    }

   MeilleurP = document.getElementById("lblReponse").innerHTML = "Le meilleur Pointage est: " + MeilleurPoint + " et le nom du Joueur est " + NomMeilleurJoueur ;

    return MeilleurP;
}

function btnTrouverPire_onclick()
{
    PireP();
}

function PireP()
{
    var PireP;
    var PirePoint = TabPoints[0];
    var NomPireJoueur = TabJoueur[0];

    for (var i=0 ; i<TabPoints.length; i++)
    {
        if (PirePoint>TabPoints[i])
        {
            PirePoint = TabPoints[i];
            NomPireJoueur = TabJoueur[i];
        }
    }

    PireP = document.getElementById("lblReponse").innerHTML = " Le pire Pointage est : " + PirePoint + " et le nom du Joueur est " + NomPireJoueur;

    return PireP;
}

function btnRechercher_onclick()
{
 res = Rechercher();
}
function Rechercher()
{
    var Recherche;
    var Trouve;
    var i;
    var NomJoueur;

    Trouve = false;
    i = 0;
    NomJoueur = document.getElementById("txtNom").value;

    while ((Trouve==false) && (i <= 3))
    {
        if(TabJoueur[i] == NomJoueur)
        {
            Trouve = true;
        }
        else
        {
            i++
        }
    }
    if (Trouve == true)
    {
        Recherche =  document.getElementById("lblReponse").innerHTML = " Le nom du Joueur est : " + NomJoueur + " et le pointage obtenu est " + TabPoints[i];
    }
    else
    {
        Recherche =  document.getElementById("lblReponse").innerHTML = "Entree Non Valide: Veuillez Ressayer";
    }
    return Recherche;
}



