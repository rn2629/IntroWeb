
function frmMembre_onsubmit()
{
    var Valid = true;

    if (validChampOblig()=== true)
    {
        if(validFormats()=== true)
        {
            Valid = true;
        }
        else
            {
            document.getElementById("lblMessageErreur").innerHTML = "Veuillez remplir les champs Obligatoires";
            Valid = false;
        }
    }
    return Valid;
}

function TraiterInfos()
{

}

function validChampOblig()
{
    var Valid = true;
    var TabValid = new Array( "txtNom","txtPrenom", "txtAdresse", "txtVille", "tel", "txtCodePerm", "txtAge", "txtCodePostal" );

    for (var i=0; i<TabValid.length; i++)
    {
        if(validExist(TabValid[i])=== false)
        {
            Valid = false;
        }
    }
return Valid;
}

function validExist(nomID)
{
    var Valid = true;

    if(document.getElementById(nomID)=== false)
    {
        Valid = false;
        document.getElementById(nomID).style.borderColor ="Red";
    }
    else
    {
        document.getElementById(nomID).style.borderColor ="";
    }
return Valid;
}

function validFormats()
{
    var Valid = true;

    if (validNom(document.getElementById("txtNom")).value=== false)
    {
        Valid = false;
        document.getElementById("txtNom").style.borderColor="Red";
    }
    else if (validNom(document.getElementById("txtPrenom")).value=== false)
    {
        Valid = false;
        document.getElementById("txtPrenom").style.borderColor="Red";
    }
    else if (validNom(document.getElementById("txtVille")).value=== false)
    {
        Valid = false;
        document.getElementById("txtVille").style.borderColor="Red";
    }
    else if (validTel(document.getElementById("tel")).value=== false)
    {
        Valid = false;
        document.getElementById("tel").style.borderColor ="Red";
    }
    else if(validCodePerm(document.getElementById("txtCodePerm")).value=== false)
    {
        Valid = false;
        document.getElementById("txtCodePerm").style.borderColor="Red";
    }
    else if(validAge(document.getElementById("txtAge")).value=== false)
    {
        Valid = false;
        document.getElementById("txtAge").style.borderColor="Red";
    }
    else if ((document.getElementById("txtCodePostal").value=== false) && (document.getElementById("txtCodePostal").value !==""))
    {
        Valid = false;
        document.getElementById("txtCodePostal").style.borderColor="Red";
    }
return Valid;
}

function validNom(chaine)
{

}