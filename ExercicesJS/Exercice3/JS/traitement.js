function btnCalculer_onclick()
{
    var ArgentCAN, TauxChangeEuro, Euro;  // declaration de variables

    ArgentCAN = parseFloat(document.getElementById("txtArgentCAN").value);//
    TauxChangeEuro = parseFloat((document.getElementById("txtTauxChangeEuro").value));
    Euro = (ArgentCAN*TauxChangeEuro);  //traitement

    console.log("Votre montant en Euro sera:" + Euro);

}
