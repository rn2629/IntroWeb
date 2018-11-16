function btnCalculer_onclick()
{
    var Nbre1, Nbre2, Operateur, Resultat ;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;
    Resultat = calculer(Nbre1,Nbre2,Operateur);

    document.getElementById("lblMessage").innerHTML = "Le resultat est :" + Resultat;
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