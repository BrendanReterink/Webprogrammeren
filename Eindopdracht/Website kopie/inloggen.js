// Javascript van het inlogscherm

$(document).ready(function(){

var aantalPogingen = 0;   
//document.getElementById("login").onclick=function(){
// var document.getElementById("gebruikersnaam").value;
// var document.getElementById("wachtwoord").value;
//}  

//var doorverwijzen = function(){

document.getElementById("login").onclick=function(){
var gebruikersnaam = $('#gebruikersnaam').val();
var wachtwoord = $('#wachtwoord').val();

if(gebruikersnaam == ""){
$(".melding").html("Gebruikersnaam invullen.");
$('#loginlayout').effect("shake"); // functionaliteit 1.5
}else if(gebruikersnaam == "Hekman" && wachtwoord !== '123456' || gebruikersnaam == "Koning" && wachtwoord !== '123456'|| gebruikersnaam == "ErikHekman" && wachtwoord !== '123456'|| gebruikersnaam == "ThijsWaardenburg" && wachtwoord !== '123456'|| gebruikersnaam == "Ronald" && wachtwoord !== '123456'|| gebruikersnaam == "RonaldVanEssen" && wachtwoord !== '123456' || gebruikersnaam == "Brendan" && wachtwoord !== '123456'){
$("melding").html = ("Dit wachtwoord is onjuist"); // functionaliteit 1.2
$('#loginlayout').effect("shake"); // functionaliteit 1.6
}else{
$(".melding").html("");
} 

if(wachtwoord == ""){
$(".meldingwachtwoord").html("Wachtwoord invullen."); // functionaliteit 1.5
$('#loginlayout').effect("shake"); // functionaliteit 1.6
} else {
$(".meldingwachtwoord").html("");
}

aantalPogingen++;    // functionaliteit 1.3
if (aantalPogingen == 3){
document.getElementById('login').disabled = true;
$(".meldingwachtwoord").html("Toegang geblokkeerd");
} 

if(gebruikersnaam == "Hekman" && wachtwoord == "123456" || gebruikersnaam == "Koning" && wachtwoord == "123456" || gebruikersnaam == "ErikHekman" && wachtwoord == "123456" || gebruikersnaam == "ThijsWaardenburg" && wachtwoord == "123456" || gebruikersnaam == "Ronald" && wachtwoord == "123456" || gebruikersnaam == "RonaldVanEssen" && wachtwoord == "123456" || gebruikersnaam == "Brendan" && wachtwoord == "123456"){
$(location).attr("href","timeline.html"); // functionaliteit 1.4
} else{
$(".foutmelding").html("Deze combinatie van uw wachtwoord en gebruikersnaam is onjuist."); // functionaliteit 1.1
$('#loginlayout').effect("shake"); // functionaliteit 1.6
}

$('#gebruikersnaam').val('');
$('#wachtwoord').val('');

} // afsluiting functie onclick
//  }); // afsluiten functie doorverwijzen
}); // afsluiting document.ready