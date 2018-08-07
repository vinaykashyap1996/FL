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
        var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");


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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");


    
	
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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");


	
	
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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");
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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");



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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");


         }
          if(pageId == 'bool')
         {
        var headervalue = " THE BOOLEAN CALCULATOR ";
        var content ='<div id="calc-layout"><input type = "number" id="input1"><button id = "and">&&</button><button id = "or">||</button><button id = "not" onclick = "not()">!</button><input type ="number" id="input2"><p id = "output1"></p></div>';
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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");

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
         var element = document.getElementById("bodycontent");
        element.classList.remove("bodytime");
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
        element.classList.remove("bodytime");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodybal");
 }

 if(pageId == 'time')
         {
        var headervalue = "TIMEZONE";
        var content ='<select><option timeZoneId="1" gmtAdjustment="GMT-12:00" useDaylightTime="0" value="-12">(GMT-12:00) International Date Line West</option> <option timeZoneId="2" gmtAdjustment="GMT-11:00" useDaylightTime="0" value="-11">(GMT-11:00) Midway Island, Samoa</option> <option timeZoneId="3" gmtAdjustment="GMT-10:00" useDaylightTime="0" value="-10">(GMT-10:00) Hawaii</option> <option timeZoneId="4" gmtAdjustment="GMT-09:00" useDaylightTime="1" value="-9">(GMT-09:00) Alaska</option> <option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option> <option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option> <option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</option> <option timeZoneId="8" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option> <option timeZoneId="9" gmtAdjustment="GMT-07:00" useDaylightTime="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</option> <option timeZoneId="10" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Central America</option> <option timeZoneId="11" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Central Time (US & Canada)</option> <option timeZoneId="12" gmtAdjustment="GMT-06:00" useDaylightTime="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option> <option timeZoneId="13" gmtAdjustment="GMT-06:00" useDaylightTime="0" value="-6">(GMT-06:00) Saskatchewan</option> <option timeZoneId="14" gmtAdjustment="GMT-05:00" useDaylightTime="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option> <option timeZoneId="15" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</option> <option timeZoneId="16" gmtAdjustment="GMT-05:00" useDaylightTime="1" value="-5">(GMT-05:00) Indiana (East)</option> <option timeZoneId="17" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option> <option timeZoneId="18" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Caracas, La Paz</option> <option timeZoneId="19" gmtAdjustment="GMT-04:00" useDaylightTime="0" value="-4">(GMT-04:00) Manaus</option> <option timeZoneId="20" gmtAdjustment="GMT-04:00" useDaylightTime="1" value="-4">(GMT-04:00) Santiago</option> <option timeZoneId="21" gmtAdjustment="GMT-03:30" useDaylightTime="1" value="-3.5">(GMT-03:30) Newfoundland</option> <option timeZoneId="22" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Brasilia</option> <option timeZoneId="23" gmtAdjustment="GMT-03:00" useDaylightTime="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option> <option timeZoneId="24" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Greenland</option> <option timeZoneId="25" gmtAdjustment="GMT-03:00" useDaylightTime="1" value="-3">(GMT-03:00) Montevideo</option> <option timeZoneId="26" gmtAdjustment="GMT-02:00" useDaylightTime="1" value="-2">(GMT-02:00) Mid-Atlantic</option> <option timeZoneId="27" gmtAdjustment="GMT-01:00" useDaylightTime="0" value="-1">(GMT-01:00) Cape Verde Is.</option> <option timeZoneId="28" gmtAdjustment="GMT-01:00" useDaylightTime="1" value="-1">(GMT-01:00) Azores</option> <option timeZoneId="29" gmtAdjustment="GMT+00:00" useDaylightTime="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option> <option timeZoneId="30" gmtAdjustment="GMT+00:00" useDaylightTime="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option> <option timeZoneId="31" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option> <option timeZoneId="32" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option> <option timeZoneId="33" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option> <option timeZoneId="34" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option> <option timeZoneId="35" gmtAdjustment="GMT+01:00" useDaylightTime="1" value="1">(GMT+01:00) West Central Africa</option> <option timeZoneId="36" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Amman</option> <option timeZoneId="37" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option> <option timeZoneId="38" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Beirut</option> <option timeZoneId="39" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Cairo</option> <option timeZoneId="40" gmtAdjustment="GMT+02:00" useDaylightTime="0" value="2">(GMT+02:00) Harare, Pretoria</option> <option timeZoneId="41" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option> <option timeZoneId="42" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Jerusalem</option> <option timeZoneId="43" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Minsk</option> <option timeZoneId="44" gmtAdjustment="GMT+02:00" useDaylightTime="1" value="2">(GMT+02:00) Windhoek</option> <option timeZoneId="45" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option> <option timeZoneId="46" gmtAdjustment="GMT+03:00" useDaylightTime="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option> <option timeZoneId="47" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Nairobi</option> <option timeZoneId="48" gmtAdjustment="GMT+03:00" useDaylightTime="0" value="3">(GMT+03:00) Tbilisi</option> <option timeZoneId="49" gmtAdjustment="GMT+03:30" useDaylightTime="1" value="3.5">(GMT+03:30) Tehran</option> <option timeZoneId="50" gmtAdjustment="GMT+04:00" useDaylightTime="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option> <option timeZoneId="51" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Baku</option> <option timeZoneId="52" gmtAdjustment="GMT+04:00" useDaylightTime="1" value="4">(GMT+04:00) Yerevan</option> <option timeZoneId="53" gmtAdjustment="GMT+04:30" useDaylightTime="0" value="4.5">(GMT+04:30) Kabul</option> <option timeZoneId="54" gmtAdjustment="GMT+05:00" useDaylightTime="1" value="5">(GMT+05:00) Yekaterinburg</option> <option timeZoneId="55" gmtAdjustment="GMT+05:00" useDaylightTime="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option> <option timeZoneId="56" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option> <option timeZoneId="57" gmtAdjustment="GMT+05:30" useDaylightTime="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option> <option timeZoneId="58" gmtAdjustment="GMT+05:45" useDaylightTime="0" value="5.75">(GMT+05:45) Kathmandu</option> <option timeZoneId="59" gmtAdjustment="GMT+06:00" useDaylightTime="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option> <option timeZoneId="60" gmtAdjustment="GMT+06:00" useDaylightTime="0" value="6">(GMT+06:00) Astana, Dhaka</option> <option timeZoneId="61" gmtAdjustment="GMT+06:30" useDaylightTime="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option> <option timeZoneId="62" gmtAdjustment="GMT+07:00" useDaylightTime="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option> <option timeZoneId="63" gmtAdjustment="GMT+07:00" useDaylightTime="1" value="7">(GMT+07:00) Krasnoyarsk</option> <option timeZoneId="64" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option> <option timeZoneId="65" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option> <option timeZoneId="66" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option> <option timeZoneId="67" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Perth</option> <option timeZoneId="68" gmtAdjustment="GMT+08:00" useDaylightTime="0" value="8">(GMT+08:00) Taipei</option> <option timeZoneId="69" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option> <option timeZoneId="70" gmtAdjustment="GMT+09:00" useDaylightTime="0" value="9">(GMT+09:00) Seoul</option> <option timeZoneId="71" gmtAdjustment="GMT+09:00" useDaylightTime="1" value="9">(GMT+09:00) Yakutsk</option> <option timeZoneId="72" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Adelaide</option> <option timeZoneId="73" gmtAdjustment="GMT+09:30" useDaylightTime="0" value="9.5">(GMT+09:30) Darwin</option> <option timeZoneId="74" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Brisbane</option> <option timeZoneId="75" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option> <option timeZoneId="76" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Hobart</option> <option timeZoneId="77" gmtAdjustment="GMT+10:00" useDaylightTime="0" value="10">(GMT+10:00) Guam, Port Moresby</option> <option timeZoneId="78" gmtAdjustment="GMT+10:00" useDaylightTime="1" value="10">(GMT+10:00) Vladivostok</option> <option timeZoneId="79" gmtAdjustment="GMT+11:00" useDaylightTime="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option> <option timeZoneId="80" gmtAdjustment="GMT+12:00" useDaylightTime="1" value="12">(GMT+12:00) Auckland, Wellington</option> <option timeZoneId="81" gmtAdjustment="GMT+12:00" useDaylightTime="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option> <option timeZoneId="82" gmtAdjustment="GMT+13:00" useDaylightTime="0" value="13">(GMT+13:00) Nukualofa</option></select> '; 
        document.getElementById("pageconet").innerHTML = content;
        document.getElementById("headerconatnt").innerHTML = headervalue;
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
        element.classList.remove("bodybal");
        var element = document.getElementById("bodycontent");
        element.classList.add("bodytime");

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
        var result12 = (input1.value & input2.value);
        output.innerHTML = result12;
    });


    or.addEventListener("click", function(){
        var result12 = (input1.value | input2.value);
        output.innerHTML = result12;
    });

    not.addEventListener("click", function(){
        var result12 = !(input1.value);
        output.innerHTML = result12;
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
              document.getElementById("demo1").innerHTML =  current + ' coins --> ' + cnt + ' number<br>';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' number<br>';
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
              document.getElementById("demo1").innerHTML =  current + ' coins--> ' + cnt + ' number<br>';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' number<br>';
        
    }
    document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' number<br>';

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