function btnCalculer_onclick()
{
    var Revenus,Loyer,Nourrriture,Deplacements, Reste;  // declaration de variables

    Revenus = parseFloat(document.getElementById("txtRevenus").value);//
    Loyer = parseFloat(document.getElementById("txtMontantLoyer").value);
    Nourrriture = parseFloat(document.getElementById("txtMontantNourriture").value);
    Deplacements = parseFloat(document.getElementById("txtMontantDeplacements").value);
        Reste = ((Revenus-(Loyer+Nourrriture+Deplacements))*12)/52;  // traitement

    console.log("Vos Depenses personnelles seront de: " + Reste.toFixed(2) + " Par semaine ");

}
