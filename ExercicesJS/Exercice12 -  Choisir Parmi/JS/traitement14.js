function btnCalculer_onclick()
{
    var Nbre1, Nbre2, Operateur, Resultat, Resultat1,Resultat2,Resultat3,Resultat4 ;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;
    Resultat1 = Nbre1 + Nbre2;
    Resultat2 = Nbre1 - Nbre2;
    Resultat3 = Nbre1 * Nbre2;
    Resultat4 = Nbre1 / Nbre2;

    if (document.getElementById("txtOperateur").value == "+")
    {
     Resultat = Resultat1;
    }
    else
    {
        if(document.getElementById("txtOperateur").value == "-")
        {
            Resultat = Resultat2;
        }
    else
        {
        if (document.getElementById("txtOperateur").value == "*")
        {
            Resultat = Resultat3;
        }
    else
        {
        if (document.getElementById("txtOperateur").value == "/")
        {
            Resultat = Resultat4;
        }

        }
        }
    }


    document.getElementById("lblMessage").innerHTML = "Le resultat est :" + Resultat;

 	

}