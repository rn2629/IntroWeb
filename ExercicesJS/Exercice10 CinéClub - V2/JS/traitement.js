function btnCalculer_onclick()
{
    var PrixBase, Age, Montant, Representation, MiSession, Listes;

    Age = parseInt(document.getElementById("txtAge").value);
    Listes = document.getElementById("lstOptions").value;
    MiSession = parseFloat(document.getElementById("chkMiSession").value);
    Representation = document.getElementById("radMidi","radSoir").value;
    Age = parseInt(document.getElementById("txtAge").value);
    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);

    if (document.getElementById("chkMiSession").checked == true)
    {

        if (document.getElementById("radMidi").checked == true)
        {
            if (Age <= 16)
            {
                Representation = "Midi";
                MiSession = 0.6;
            }

            else if (Age > 16)
            {
                Representation = "Midi";
                MiSession = 0.3;
            }
        }

        if (document.getElementById("radSoir").checked == true) {
            if (Age <= 16) {
                Representation = "Soir";
                MiSession = 0.4;
            }
            else if (Age > 16) {
                Representation = "Soir";
                MiSession = 0;
            }
        }


    }
   else {
        MiSession = 0;
    }

    MiSession = PrixBase*MiSession;
    Montant = (PrixBase-MiSession);

    console.log(" Le montant sera de : " + Montant + "$" + " Pour la Representation de  " + Representation + " du film " + Listes + " et spectateurs de " + Age + "ans");


}