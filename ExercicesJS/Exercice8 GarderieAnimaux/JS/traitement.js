function btnCalculer_onclick()
{
    var  NbreJours, Tarif, Montant, ServiceToilettage, Veterinaires, Choix, ServiceToilettage2,Taxes, Rabais, TauxHoraires;


    Choix = document.getElementById("radChien","radChat").value;
    ServiceToilettage= parseFloat(document.getElementById("chkServ").value);
    Veterinaires = document.getElementById("lstVeterinaire").value;
    NbreJours = parseFloat(document.getElementById("txtNbreJours").value);
    TauxHoraires = parseFloat(document.getElementById("txtTauxHoraires").value);


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


    if (NbreJours <= 1 && 5)
    {
        Rabais = 0;
    }
    else
    {
        if (NbreJours <= 5 && 10)
        {
            Rabais = 0.05;
        }
        else
        {
            if (NbreJours <= 10 && 30)
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


    if (document.getElementById("radChien").checked== true)
    {
        Tarif = 18.50;

        Choix = "Chien";

    }
    else {
        Tarif = 16.95;
        Veterinaires = "Maxime Simard";
        Choix = "Chat";
    }



    Montant= (((NbreJours*Tarif)+ ServiceToilettage )- Rabais);
    Taxes = (Montant*0.05) + (Montant*0.09975);
    Montant = (Montant + Taxes)-Rabais;

    console.log(" Le montant sera de: " + Montant + " et Votre Veterinaire sera " + Veterinaires + " pour la garde de votre " + Choix + " " + ServiceToilettage2 );

}

function radChien_onclick()
{
    alert("Bonjour");
    document.getElementById("imgChien-Chat").src ="img/chien.jpg";
}
 function radChat_onclick()
 {
  alert ("Bonjour");
  document.getElementById("imgChien-Chat").src = "img/chat.jpg";
 }