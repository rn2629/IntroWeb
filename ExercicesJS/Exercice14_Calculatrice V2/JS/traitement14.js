function btnCalculer_onclick()
{
    if (validChampOblig()=== true)
    {
        traiterInfos();
    }
}

function traiterInfos()
{
    var Nbre1, Nbre2, Operateur, Resultat ;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;
    Resultat = calculer(Nbre1,Nbre2,Operateur);

    document.getElementById("lblMessage").innerHTML = "Le resultat est :" + Resultat;
}

function validChampOblig()
{
    var valid = false;

    if ((validExist("txtNbre1")=== true) && (validExist("txtNbre2")=== true) &&  (validExist("txtOperateur")=== true))
    {
        valid = true;
    }

    return valid;
}

function validExist(nomID)
{
    var valide = true;

    if (document.getElementById(nomID).value=== "")
    {
        valide = false;
        document.getElementById(nomID).style.backgroundColor="red";
    }
    else
    {
        valide = true;
        document.getElementById(nomID).style.backgroundColor="white";
    }

    return valide;
}

function calculer(Nbre1,Nbre2,Operateur)
{
    switch (Operateur)
    {
        case "+":
            Resultat =  Nbre1 + Nbre2;
            break;
        case "-":
            Resultat = Nbre1 - Nbre2;
            break;
        case "*":
            Resultat = Nbre1 * Nbre2;
            break;
        case  "/":
            Resultat = Nbre1 / Nbre2;
            break;
    }
    return Resultat;

}
