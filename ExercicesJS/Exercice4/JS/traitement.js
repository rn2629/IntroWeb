function btnCalculer_onclick()
{
    var Destination, Distance, ConsommationVoiture, PrixLitre, Cout;  // declaration de variables

    Destination = document.getElementById("txtDestination").value;
    Distance = parseFloat(document.getElementById("txtDistance").value);
    ConsommationVoiture = parseFloat(document.getElementById("txtConsommationVoiture").value);
    PrixLitre = parseFloat(document.getElementById("txtPrixLitre").value);
    Cout = (Distance*ConsommationVoiture)/100*PrixLitre;  // traitement

    console.log("Votre montant Cout sera de: "  + Cout +  " Pour " + Destination);

}
