window.onload=function() {
var button= document.getElementById("btn");
var user= document.getElementById("user");
var pass= document.getElementById("pass");
var isValid=function(){
 	console.log('clicked',user.value,pass.value)
 	var errNameRef = document.getElementById("name1");
 	var errPassRef = document.getElementById("pass1");
	var match = user.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
	if(!match)
	{
       errNameRef.innerHTML="enter the vaild email";
       return false;
	} else if(!pass.value){
		errNameRef.innerHTML="";
		errPassRef.innerHTML="enter the vaild password";
	   return false;
	}else {
		errNameRef.innerHTML=errPassRef.innerHTML = "";
		return true;
	}
}
user.onkeypress = function() {
	isValid();
}
pass.onkeypress = function() {
	isValid();
}
button.onclick = function() {
	if(isValid()) {
		alert("login success");
	}
}
}

