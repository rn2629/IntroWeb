function frmMembre_onclick()
{
    if(validChampOblig()=== true)
    {
        SaisirTarifs();
    }

}

function SaisirTarifs()
{
    var Type, Montant;
    Type = document.getElementById("type").value;

    switch (Type)
    {
        case "adulte":
            Montant = 90;
            break;
        case "étudiant":
            Montant = 60;
            break;
        case "retraité":
            Montant = 80;
            break;
    }
    document.getElementById("resultat").innerHTML ="Le Montant pour un " + Type + " est " + Montant + "$";
}

function validChampOblig()
{
    var Valid = true;

    if(document.getElementById("txtNom").value==="")
    {
        Valid = false;
        document.getElementById("txtNom").style.borderColor="Red";
    }
    else
    {
        Valid = true;
        document.getElementById("txtNom").style.borderColor="White";
    }


    return Valid;
}

function validExist()
{

}

