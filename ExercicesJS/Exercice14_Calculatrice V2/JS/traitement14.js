function btnCalculer_onclick()
{
    var Nbre1, Nbre2, Operateur, Resultat, Resultat1,Resultat2,Resultat3,Resultat4 ;

    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);

    Operateur = document.getElementById("txtOperateur").value;
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



    document.getElementById("lblMessage").innerHTML = "Le resultat est :" + Resultat;

 	

}