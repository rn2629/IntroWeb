
var PrixBase, Age, Montant, Representation, MiSession, Listes, NomFilm;

function btnCalculer_onclick()
{
    SaisirVariables();
    saisirMiSession();
    calculerMoy();
}

function SaisirVariables()
{

    Age = parseInt(document.getElementById("txtAge").value);
    Listes = document.getElementById("lstOptions").value;
    MiSession = parseFloat(document.getElementById("chkMiSession").value);
    Representation = document.getElementById("radMidi","radSoir").value;
    Age = parseInt(document.getElementById("txtAge").value);
    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);
    NomFilm = document.getElementById("Film").value;
}

function saisirMiSession()
{
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

}

function lstOptions_onchange()
{
    var Film;

    Film = document.getElementById("lstOptions").value;

    document.getElementById("imgFilm").src = "img/" + Film + ".jpg";
}

function calculerMoy()
{

    MiSession = PrixBase*MiSession;
    Montant = (PrixBase-MiSession);

    document.getElementById("lblMessage").innerHTML = " Le montant sera de : " + Montant + "$" + " Pour la Representation de  " + Representation + " du film " + Listes + " et spectateurs de " + Age + "ans";


}