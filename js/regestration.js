function checkFormEntry()
{
	document.getElementById("errorMessage").innerHTML="";
	document.getElementById("successMessage").innerHTML="";

	var errors="";
	if(document.getElementById("name1").value.length<3)
	{
		errors +="Enter Your correct Name.<br>";
	}
	if(document.getElementById("name2").value.length<3)
	{
		errors +="Please Enter a valid Surname <br>";
	}

	if(document.getElementById("password").value.length<8)
	{
		errors +="Password Must be 8 characters.<br>";
	}
	if(document.getElementById("phone").value.length<10)
	{
		errors +="Contact Number must be 10 digit.<br>";
	}

	if(document.getElementById("email").value.length<5)
	{
		errors +="Enter a Valid Email Address.<br>";
	}
	if(errors!="")
	{
		document.getElementById("errorMessage").innerHTML=errors;
	}
	else{
		window.location.href="Main.html";
		alert("Your Details are registered. ")
	}
	return false;
}

document.getElementById("form").onsubmit=checkFormEntry;
