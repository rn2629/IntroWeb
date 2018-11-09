
var NomJoueur, TabPoints = new Array(4),TabJoueur = new Array(4),NbPoints, Cpt = 0;


function btnAjouter_onclick()
{
    NomJoueur = document.getElementById("txtNom").value;
    NbPoints = parseFloat(document.getElementById("txtPoints").value);
    TabJoueur [Cpt]= NomJoueur;
    TabPoints[Cpt]= NbPoints;
    Cpt++;
    document.getElementById("lblNbreJoueur").innerHTML = ("Nom Joueur" + Cpt);

    if (Cpt > 3)
    {
        document.getElementById("btnTrouverPire").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnAjouter").disabled = true;
    }


   /* for (i=0 ; i<=3; i++)
    {
        TabNbPoints[i] = 0;
    }

*/

}

function btnTrouverMoy_onclick()
{
   var  Total = 0, Moyenne = 0;

    for (var i =0; i<TabPoints.length ; i++)
    {
       Total += TabPoints[i] ;

    }

    Moyenne = Total/4;
    document.getElementById("lblReponse").innerHTML = "La moyenne est de:" + Moyenne;
}

function btnTrouverMeilleur_onclick()
{
    var MeilleurPoint = TabPoints[0];
    var NomJoueur;

    if (NomJoueur<=0 && NomJoueur<=4)
    {

    }

    for (var i=0 ;i<TabPoints.length; i++)
    {
        if(MeilleurPoint<TabPoints[i])
        {
            MeilleurPoint = TabPoints[i];
        }
    }

    document.getElementById("lblReponse").innerHTML = "Le meilleur Pointage est: " + MeilleurPoint + " et le nom du Joueur est " + NomJoueur ;
}

function btnTrouverPire_onclick()
{
    var PirePoint = TabPoints[0];

    for (var i=0 ; i<TabPoints.length; i++)
    {
        if (PirePoint>TabPoints[i])
        {
            PirePoint = TabPoints[i];
        }
    }

    document.getElementById("lblReponse").innerHTML = " Le meilleur Pointage est : " + PirePoint + " et le nom du Joueur est " + NomJoueur ;
}

function btnRechercher_onclick()
{

}



