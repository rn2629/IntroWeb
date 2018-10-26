function btnCalculer_onclick()
{
    var NbEtudiants, NbAgés, NbAutres, NbBillets,Rabais, PrixFinal;

    NbEtudiants = parseInt(document.getElementById("txtNbEtudiants").value);
    NbAgés = parseInt(document.getElementById("txtAgés").value);
    NbAutres = parseInt(document.getElementById("txtAutres").value);
    NbBillets = parseInt(document.getElementById("txtNbBillets").value);
    Rabais = parseFloat(document.getElementById("txtRabais").value);

     if( NbBillets > 5)
     {
         Rabais = 0.1;
     }
     else
     {
         Rabais = 0;
     }

     PrixFinal = ((NbEtudiants*12)+(NbAgés*15)+(NbAutres*20) - Rabais) + (((NbEtudiants*12)+(NbAgés*15)+(NbAutres*20) - Rabais) *0.05) + (((NbEtudiants*12)+(NbAgés*15)+(NbAutres*20) - Rabais) * 0.09975);


    console.log("Le montant sera de:" + Montant);

}