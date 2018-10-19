function btnCalculer_onclick()
{
    var Billet1Cent,Billet5Cent,Billet10Cent,Billet25Cent, Total;  // declaration de variables

    Billet1Cent = parseFloat(document.getElementById("txtBillet1").value);//
    Billet5Cent = parseFloat(document.getElementById("txtBillet5").value);
    Billet10Cent = parseFloat(document.getElementById("txtBillet10").value);
    Billet25Cent = parseFloat(document.getElementById("txtBillet25").value);

    Total = (Billet1Cent*0.01)+(Billet5Cent*0.05)+(Billet10Cent*0.1)+(Billet25Cent*0.25);  // traitement

    console.log("Votre montant Total Canadian Tire sera de :" + Total);

}
