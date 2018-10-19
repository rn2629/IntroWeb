
function btnCalculer_onclick()
{
    var PoidsLivre, Kg;  // declaration de variables

    PoidsLivre = parseFloat(document.getElementById("txtLivres").value); // saisir poids en livres
    Kg = (PoidsLivre/2.2);  //traitement
    console.log("Votre ^poids en Kg:" + Kg.toFixed(2));

}