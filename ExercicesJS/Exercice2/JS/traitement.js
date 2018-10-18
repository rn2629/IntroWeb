function btnCalculer_onclick()
{
    var MoyKmMois, TotKm;  // declaration de variables

    MoyKmMois = parseFloat(document.getElementById("txtMoyKmMois").value); // saisir Moyenne /mois
    TotKm = (MoyKmMois*60);  //traitement

    console.log("Votre total de km en 5ans est:" + TotKm);

}
