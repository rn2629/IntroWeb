function btnCalculer_onclick()
{
    var PrixBase, Age, Montant, Reduction, Representation;

    Representation = document.getElementById("radMidi","radSoir").value;
    Age = parseInt(document.getElementById("txtAge").value);
    PrixBase = parseFloat(document.getElementById("txtBasePrix").value);


    if (document.getElementById("radMidi").checked == true)
    {
        if (Age <= 16)
        {
            Representation = "Midi";
            Reduction = 0.6;
        }

        else if (Age > 16)
        {
            Representation = "Midi";
            Reduction = 0.3;
        }
    }

   if (document.getElementById("radSoir").checked == true)
   {
     if (Age <= 16)
     {
         Representation = "Soir";
         Reduction = 0.4;
     }
     else if (Age > 16)
     {
         Representation = "Soir";
         Reduction = 0;
     }
   }

   Montant = (PrixBase-(PrixBase*Reduction)) + ((PrixBase-(PrixBase*Reduction))*0.05) + ((PrixBase-(PrixBase*Reduction))*0.09975);

    console.log("Le montant sera de : " + Montant + "Pour" + Representation);


}