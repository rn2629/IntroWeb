function btnCalculer_onclick()
{
    var  NbreJours, Tarif, Montant, ServiceToilettage, Veterinaires, Choix;


    Choix = document.getElementById("radChien","radChat").value;
    ServiceToilettage= parseFloat(document.getElementById("chkServ").value);
    Veterinaires = document.getElementById("lstVeterinaire").value;
    NbreJours = parseFloat(document.getElementById("txtNbreJours").value);

    if (document.getElementById("chkServ").checked== true)
    {
        ServiceToilettage=  5;
    }
    else
    {
        ServiceToilettage = 0;
    }


    if (document.getElementById("radChien").checked== true)
    {
        Tarif = 18.50;
        Veterinaires ="Audrey Bouchard";
        Choix = "Chien";

    }
    else {
        Tarif = 16.95 + ServiceToilettage;
        Veterinaires = "Maxime Simard";
        Choix = "Chat";
    }





   /* if (document.getElementById("chkServ").checked== true)
    {
        ServiceToilettage= 5.75;
    }
    else
    {
        ServiceToilettage = 0;
    }*/


    Montant= ((NbreJours*Tarif)+ ServiceToilettage ) + (((NbreJours*Tarif)+ServiceToilettage)*0.05) + (((NbreJours*Tarif)+ ServiceToilettage)*0.09975);

    console.log(" Le montant sera de: " + Montant + " et Votre Veterinaire sera " + Veterinaires + " pour la garde de votre " + Choix );

}