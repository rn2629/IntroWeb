function btnCalculer_onclick()
{
    var NumSem, JourSem ;

    NumSem = parseInt(document.getElementById("txtNumSem").value);

    switch (NumSem)
    {
        case  1: NumSem = "Lundi";
        break;

        case  2: NumSem = "Mardi";
        break;

        case  3: NumSem = "Mercredi";
        break;

        case  4: NumSem = "Jeudi";
        break;

        case 5: NumSem = "Vendredi";
        break;

        case 6: NumSem = "Samedi";
        break;

        case 7: NumSem = "Dimanche";
        break;
    }
 	

    document.getElementById("lblMessage").innerHTML = "Le jour est: " + NumSem;
}