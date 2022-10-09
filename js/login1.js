function checkFormEntry()
{
	var a=document.getElementById("username").value;
	var b=document.getElementById("password").value;

	if(a=="")
	{
		document.getElementById("username");
		alert("Please Enter the Username");
		return false;
	}

	if(b=="")
	{
		document.getElementById("password");
		alert("Please Enter the Password");
		return false;
	}

	else{
		alert("You have Successfully logged in.");
		window.location.href=("Main.html");
		return false;
	}
}

document.getElementById("form1").onsubmit=checkFormEntry;
