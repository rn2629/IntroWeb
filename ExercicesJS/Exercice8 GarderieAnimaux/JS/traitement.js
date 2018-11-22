
var ServiceToilettage, ServiceToilettage2 ,NbreJours, Tarif, Montant,Travail, Veterinaires, Choix, Taxes, Rabais,NbreHeures, TauxHoraires;

function saisirTauxHoraires()
{

    Veterinaires = document.getElementById("lstVeterinaire").value;


    switch (Veterinaires)
    {
        case "Audrey Bouchard":

            TauxHoraires = 25;
            break;

        case "Stéphane Tremblay":

            TauxHoraires = 35;
            break;

        case "Maxime Simard":

            TauxHoraires = 40;
            break;

        case "Mélissa Caron":

            TauxHoraires = 45;
            break;
    }

}

 function SaisirNbreJours()

 {



     if (NbreJours >= 1 && NbreJours <= 5)
     {
         Rabais = 0;
     }
     else
     {
         if (NbreJours >= 5 && NbreJours <= 10)
         {
             Rabais = 0.05;
         }
         else
         {
             if (NbreJours >= 10 && NbreJours <= 30)
             {
                 Rabais = 0.01;
             }
             else
             {
                 if (NbreJours >= 30)
                 {
                     Rabais = 0.015;
                 }
             }
         }
     }

 }

 function CalculerMontant()
 {
     if (document.getElementById("radChien").checked== true)
     {
         Tarif = 18.50;

         Choix = "Chien";

     }
     else {
         Tarif = 16.95;
         Choix = "Chat";
     }

     Travail = (NbreHeures*TauxHoraires); //montant Veterinaire
     Rabais = (NbreJours*Tarif)*Rabais;
     Montant =( (NbreJours*Tarif)-Rabais)  + ServiceToilettage;
     Taxes = Montant + (Montant*0.05) + (Montant*0.09975) + Travail;


 }

 function SaisirService()
 {


     if (document.getElementById("chkServ").checked== true)
     {

         ServiceToilettage = 5;
         ServiceToilettage2 = "avec Service de Toilettage"
     }

     else
     {
         ServiceToilettage = 0;
         ServiceToilettage2 = "Sans Service de Toilettage"
     }
 }


 function SaisirVariables()
 {
     Choix = document.getElementById("radChien","radChat").value;
     ServiceToilettage= parseFloat(document.getElementById("chkServ").value);
     NbreJours = parseFloat(document.getElementById("txtNbreJours").value);
     NbreHeures = parseFloat((document.getElementById("txtNbHeures")).value);
 }

function radChien_onclick()
{
    alert("Bonjour");
    document.getElementById("imgChien-Chat").src ="img/chien.jpg";
}
function radChat_onclick()
{
    document.getElementById("imgChien-Chat").src = "img/chat.jpg";
}

function validChamp(ID)
{
    var valid = true;

    if(document.getElementById(ID).value === "")
{
 valid = false;
 document.getElementById(ID).style.backgroundColor = "Red";
}
else {
        valid = true;
        document.getElementById(ID).style.backgroundColor = "White";
}
return valid;

}

function validChampOblig()
{
    var valide = true;
    var TabValeurs = new Array("txtNbreJours", "txtNomClient", "txtNumClient")

    for(var i=0 ; i<TabValeurs.length; i++)
    {
        valide = false;
    }
    return valide;
}



function btnCalculer_onclick()
{
    SaisirVariables();
    saisirTauxHoraires();
    SaisirNbreJours();
    SaisirService();
    CalculerMontant();




    document.getElementById("lblMessage").innerHTML = " Le montant sera de: " + Taxes + " et Votre Veterinaire sera " + Veterinaires + " pour la garde de votre " + Choix + " " + ServiceToilettage2 ;

}

