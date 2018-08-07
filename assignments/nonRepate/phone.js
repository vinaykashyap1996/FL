window.onload= function(){
showpage('help');
}
function showpage(pageId){

	if(pageId == 'support')
	{
		var headervalue = "THE FIRST NON REPEATED CHARACTER";
		var content = '<div class="layout"><input type="text" name="text" id="vi"><button id="btn">Submit</button><p id="output1"></p></div>';	
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        supportpage1();
        var element = document.getElementById("bodycontent");
        element.classList.add("bodycalss");
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
          var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");


	}
	if(pageId == 'help')
	{
		var headervalue = "THE PHONE NUMBER";
		var content = ' <div id="test1"><input type="text" placeholder="input" id="letter"></div><button id="btn1">submit</button><div id="resultvalue"></div>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        helppage();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodycalsshelp");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
          var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");


    
	
	}
	if(pageId == 'contact')
	{
		var headervalue = "REVERSE NUMBER";
		var content = ' <div class="login-layout"><input type="text" name="text" id="re1" "></div><button id="btn2">submit</button><p id="output"></p>';
		document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        contactpage1();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodycontact");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
          var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");


	
	
			}
			if (pageId =='audio') {


		var headervalue = " THE AUDIO PLAYER";
		var content = '<div id="vi"><audio controls id="myAudio"><source src="iphone_crystal.mp3" type="audio/ogg"><source src="iphone_crystal.mp3" type="audio/mpeg"></audio></div>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
		var element = document.getElementById("bodycontent");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
        element.classList.add("bodyaudio");
          var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");
	     }
         if(pageId == 'date')
         {
        var headervalue = " CHOOSE THE DATE GET THE DAY";
        var content ='<input type="date" name="date" id="res"><br><button id="btn3">Submit</button> <br/><p id="demo"></p>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        datepage();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
          var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodydate");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");



         }
          if(pageId == 'prime')
         {
        var headervalue = "PRIME NUMBER ";
        var content ='<div id="div1"><input id="input1"/></div><button id="btn5"> Submit</button><p id="res"></p><p id="res1"></p>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        primepage();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
         var element = document.getElementById("bodycontent");
        element.classList.add("bodyprime");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");


         }
          if(pageId == 'bool')
         {
        var headervalue = " THE BOOLEAN CALCULATOR ";
        var content ='<div id="calc-layout"><input type = "number" id="input1"><button id = "and">&&</button><button id = "or">||</button><button id = "not" onclick = "not()">!</button><input type ="number" id="input2"><p id = "output"></p></div>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        ronaldo();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");

 }

          if(pageId == 'coins')
         {
        var headervalue = "CONVERT AMMOUNT INTO COINS ";
        var content ='<div id="hero"><div class="container"><div id="wait"><input type ="number" name="textbox" placeholer="enter ammount" id="amm"><br/>10rupeecoin:<input  type="checkbox"  id="ru10"  value="10"><br/> 5rupeecoin :  <input  type="checkbox"  id="ru5"   value="5"><br/> 2rupeecoin :  <input  type="checkbox"  id="ru2"   value="2"><br/> 1rupeecoin :  <input  type="checkbox"  id="ru1"   value="1"><br/><button id="btn6">Submit</button><p id="demo1"></p><p id="demo2"></p><p id="ten"></p><p id="five"></p><p id="two"></p><p id="one"></p></div></div></div>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        coins();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.add("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodybal");
 }
  if(pageId == 'bal')
         {
        var headervalue = " BALANCE PARENTHESIS ";
        var content ='<div><input type="textbox" name="text" id="bal"></div><button id="btn7">submit</button><p id="test"></p></body>';
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
        balancepage();
        var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalss");
         var elementremove = document.getElementById("bodycontent");
        elementremove.classList.remove("bodycalsshelp");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycontact");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodyaudio");
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodydate");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodyprime");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodybool");
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodycoins");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodybal");
 }
 
 
  }

 function helppage(){
var input=document.getElementById("letter");
var button=document.getElementById("btn1");

button.onclick= function(){

	convertPhoneLetters(input.value);}

}
function convertPhoneLetters(input) {

var inputlength = input.length;
input = input.toLowerCase();
var phonenumber = "";
for (i = 0; i < inputlength; i++) {
var character = input.charAt(i);


switch(character){
case '0': phonenumber+="0";break;
case '1': phonenumber+="1";break;
case '2': phonenumber+="2";break;
case '3': phonenumber+="3";break;
case '4': phonenumber+="4";break;
case '5': phonenumber+="5";break;
case '6': phonenumber+="6";break;
case '7': phonenumber+="7";break;
case '8': phonenumber+="8";break;
case '9': phonenumber+="9";break;

case 'a': case 'b': case 'c': phonenumber+="2";break;
case 'd': case 'e': case 'f': phonenumber+="3";break;
case 'g': case 'h': case 'i': phonenumber+="4";break;
case 'j': case 'k': case 'l': phonenumber+="5";break;
case 'm': case 'n': case 'o': phonenumber+="6";break;
case 'p': case 'q': case 'r': case 's': phonenumber+="7";break;
case 't': case 'u': case 'v': phonenumber+="8";break;
case 'w': case 'x': case 'y': case 'z': phonenumber+="9";break;

default: phonenumber+=character;

   }
}
document.getElementById("resultvalue").innerHTML = phonenumber;
}

function supportpage1(){
var button1=document.getElementById("btn");
button1.onclick= function(){
         supportpage();
         }

}

function supportpage(){
		var str=document.getElementById("vi").value;
			 for(var i=0;i<str.length;i++){
if(str.indexOf(str.charAt(i))==str.lastIndexOf(str.charAt(i))){
document.getElementById("output1").innerHTML=str.charAt(i);
break;
}

}
}
function contactpage1(){
var button2=document.getElementById("btn2");
button2.onclick= function(){
         rev_num();
         }
}
function rev_num(){

   var n = document.getElementById("re1").value; 
   var rev =0, rem =0;
while(n > 0)
{
rev = n%10;
rem = rem*10+rev;
n=parseInt(n/10);

}
var output=document.getElementById("output");
output.innerHTML=rem;
}

function datepage()
{
    var button3=document.getElementById("btn3");
    button3.onclick= function(){
         srk();
         }  

}
function srk(){
    var d = new Date(document.getElementById("res").value);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
}

function primepage(){
 var button5=document.getElementById("btn5");
 button5.onclick= function(){
         findprime();
         }

}
function findprime()
        {
            
            var inp=document.getElementById("input1").value;
            document.getElementById("res1").innerHTML="prev prime is"+prevprime(inp);
            document.getElementById("res").innerHTML="next prime is"+nextprime(inp);
            
            function prevprime(inp)
            {
                var temp=inp-1;
                for(var i=2;i<=temp/2;i++){
                    if(temp%i==0){
                        temp--;
                    i=2;
                    }  
                    else{
                        continue;
                        j++;
                        }
                    }
            return temp;
            }
            function nextprime(inp)
            {
                inp++;
                for(var i=2;i<=inp/2;i++){
                    if(inp%i==0){
                        inp++;
                        i=2;
                    }else{
                        continue;
                    }
            }
            return inp;
        }
}  


function ronaldo()
{

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var and = document.getElementById("and");
    var or = document.getElementById("or");
    var not = document.getElementById("not");
    var output = document.getElementById("output1");

    and.addEventListener("click", function(){
        var result = (input1.value & input2.value);
        output.innerHTML = result;
    });


    or.addEventListener("click", function(){
        var result = (input1.value | input2.value);
        output.innerHTML = result;
    });

    not.addEventListener("click", function(){
        var result = !(input1.value);
        output.innerHTML = result;
    });
}



function coins(){
      var button = document.getElementById("btn6");
  var output = document.getElementById("demo");
  var amount=document.getElementById("amm");
  var ru10 = document.getElementById("ru10");
  var ru5 = document.getElementById("ru5");
  var ru2 = document.getElementById("ru2");
  var ru1 = document.getElementById("ru1");
  var count = 0;
  var left;
  var amountTocoins = function(amount, coins) 
    {
     if (amount === 0) 
      {
         return [];
       } 
     else
       {
         if (amount >= coins[0]) 
           {
            left = (amount - coins[0]);
            count++;
            return [coins[0]].concat( amountTocoins(left, coins) );
            } 
          else
            {
             coins.shift();
             return   (amount, coins);
            }
        }
        
    } 

  var calcCoins = function(amount, coins) {
    //console.log(amount, coins);
    var result = [];
    for(var i=0;i<coins.length;i++) {
      var rem = amount % coins[i];
      console.log(rem);
      var times = ((amount-rem)/coins[i]);    
      for(var j=0;j<times;j++) result.push(coins[i]);
      amount = rem;
      console.log(times);
     if((rem != 0) && (!coins[i+1]))
     {    
      for(var z=0;z<rem;z++) result.push(1);
     }
    }
    return result;
  }
  button.onclick = function() {
    var coins = [];
    if(ru10.checked) coins.push(10); 
    if(ru5.checked) coins.push(5);
    if(ru2.checked) coins.push(2);
    if(ru1.checked) coins.push(1);
    if(coins.length == 0){
         var array_elements = calcCoins(amount.value, [1]) ;
     array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
              document.getElementById("demo1").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';
    }
    }
    else{
     var array_elements = calcCoins(amount.value, coins) ;
     array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
              document.getElementById("demo1").innerHTML =  current + ' coins--> ' + cnt + ' times<br>';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';
        
    }
    document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';

    }
}
}


function balancepage()
{
    var str=document.getElementById("bal");
    var button7=document.getElementById("btn7");
     var output=document.getElementById("test");

    button7.onclick= function(){
           var result=balancedParens(str.value)
        output.innerHTML=result;

}

         }  
var balancedParens = function(str) {
  var stack = [];
  var open = { '{': '}', '[': ']', '(': ')' };
  var closed = { '}': true, ']': true, ')': true };
  
  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }
  
  return stack.length === 0;
};