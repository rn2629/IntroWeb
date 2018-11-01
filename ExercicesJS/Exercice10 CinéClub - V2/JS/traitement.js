function btnCalculer_onclick()
{
    var PrixBase, Age, Montant, Reduction, Representation, MiSession, Listes, Ages;

    Ages = parseInt(document.getElementById("txtAge").value);
    Listes = document.getElementById("lstOptions").value;
    MiSession = parseFloat(document.getElementById("chkMiSession").value);
    Representation = document.getElementById("radMidi","radSoir").value;
    Age = parseInt(document.getElementById("txtAge").value);
    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);



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

    if (document.getElementById("radSoir").checked == true)
    {
        if (Age <= 16)
        {
            Representation = "Soir";
            MiSession = 0.4;
        }
        else if (Age > 16)
        {
            Representation = "Soir";
            MiSession = 0;
        }
    }






    Montant = (PrixBase-(PrixBase*MiSession)) + ((PrixBase-(PrixBase*MiSession))*0.05) + ((PrixBase-(PrixBase*MiSession))*0.09975);

    console.log(" Le montant sera de : " + Montant + "$" + " Pour la Representation de  " + Representation + " du film " + Listes + " et spectateurs de " + Ages + "ans");


}