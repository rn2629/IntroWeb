function frmMembre_onsubmit()
{
    var Valid = true;
    var Tarif;


        if(validChampOblig()=== true)
        {

            if(validFormat() === true)
            {
                Tarif = afficherTarif();
                if(confirm(" Envoyer le Formulaire? Le montant est " + Tarif )=== false)
                {
                    Valid = false;
                }

            }
        }

        else
        {
            document.getElementById("lblMessageErreur").innerHTML = " Veuillez remplir les champs Obligatoires ";
            Valid = false;
        }

        return Valid;
}

function afficherTarif()
{
  var Tarif = 0;
  var type = document.getElementById("type").value;

  switch (type)

  {
      case "adulte":
          Tarif = 90;
          break;
      case "étudiant":
          Tarif = 60;
          break;
      case "retraité":
          Tarif = 80;
  }

  return Tarif;
}


function validExist(nomID)
{
    var Valid = true;

    if(document.getElementById(nomID).value == "")
    {
       Valid = false;

       document.getElementById(nomID).style.borderColor ="Red";
    }

    else
    {
        document.getElementById(nomID).style.borderColor = "";
    }

    return Valid;

}

function validChampOblig()
{
    var Valid = true;
    var TabValid = new Array("txtNom","txtPrenom","txtAdresse","txtVille","tel","txtAge");

    for(var i = 0 ; i < TabValid.length ; i++)
    {
        if(validExist(TabValid[i])===false)
        {

          Valid = false;

        }
    }

     return Valid;
}



function validFormat()
{
    var Valid = true;


 if(validNom(document.getElementById("txtNom").value)=== false){

     Valid = false;
     document.getElementById("txtNom").style.borderColor = "Red";
 }

 if(validNom(document.getElementById("txtPrenom").value)===false){

     Valid = false;
     document.getElementById("txtPrenom").style.borderColor = "Red";
 }

 if(validNom(document.getElementById("txtVille").value)===false){

     Valid = false;
     document.getElementById("txtVille").style.borderColor = "Red";
 }

 if (validNum(document.getElementById("tel").value) === false) {

        Valid = false;
        document.getElementById("tel").style.borderColor = "Red";
 }

 if((valideCode(document.getElementById("txtCodePostal").value)===false) && (document.getElementById("txtCodePostal").value !== "")){

     Valid = false;
     document.getElementById("txtCodePostal").style.borderColor = "Red";

 }

 else
 {

     document.getElementById("txtCodePostal").style.borderColor = "";
 }

 if((validecodePerm(document.getElementById("txtCodePerm").value)===false) && (document.getElementById("txtCodePerm").value !== "")){

     Valid = false;
     document.getElementById("txtCodePerm").style.borderColor = "Red";
 }

 else
 {

     document.getElementById("txtCodePerm").style.borderColor = "";
 }



return Valid;
}


function validNom(chaine)
{
    return /^[A-Z]{1}[a-z]+|[\-?[A-Z|a-z]]+$/.test(chaine)
}

function validNum(chaine){

    return /^(\d{3}-\d{3}-\d{4})|(\(\d{3}\) \d{3}-\d{4})$/.test(chaine)
}

function valideCode(chaine){

    return /^[A-z][0-9][A-z] [0-9][A-z][0-9]$/.test(chaine)
}

function validecodePerm(chaine){

    return /^[A-z]{4}(\d{8})$/.test(chaine)
}

var Nom, Age, TabNom = new Array(5),TabAge= new Array(5), Cpt=0 ;

function btnRechercher_onclick()
{
    Recherche();
}


function Recherche()
{

    Nom = document.getElementById("txtNom").value;
    Age = parseInt(document.getElementById("txtAge").value);
    TabNom [Cpt]= Nom;
    TabAge [Cpt]= Age;
    Cpt++;

    document.getElementById("lblNbreNom").innerHTML = "Numero de Nom " + Cpt;

    if(Cpt >4)
    {
        document.getElementById("btnRechercher").disabled = true;
        document.getElementById("btnPlusJeune").disabled = false;
    }
}

function btnPlusJeune_onclick()
{
    PlusJeune();
}

function PlusJeune()
{


    var PlusJeune = TabAge[0];
    var NomPlusJ = TabNom[0];

    for(var i=0 ; i<TabAge.length;i++)
    {
        if(PlusJeune > TabAge[i])
        {
            PlusJeune = TabAge[i];
            NomPlusJ = TabNom[i];
        }
    }


          document.getElementById("lblReponse").innerHTML = "Le plus Jeune est " + NomPlusJ +  " et son age est " + PlusJeune;


}