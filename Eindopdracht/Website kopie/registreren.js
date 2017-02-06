// Javascript van Registreren

$(document).ready(function(){
   


$("#knopaanmelden").click(function(){ 
var voornaam = $('#voornaam').val();
var achternaam = $('#achternaam').val();
var gebruikersnaam = $('#gebruikersnaam').val();
var wachtwoord = $("#wachtwoord").val();
var herhalingwachtwoord = $("#herhalingwachtwoord").val();
var geboortedatum = $("#geboortedatum").val();
var geboorteplaats = $("#geboorteplaats").val();
var woonplaats = $("#woonplaats").val();
var intresses = $("#intresses").val(); 

if (voornaam == ""){
$("#meldingvoornaam").html("Voornaam invullen."); // functionaliteit 2.1
} else{
$("#meldingvoornaam").html("");
} 
if (achternaam == ""){
$("#meldingachternaam").html("Achternaam invullen."); // functionaliteit 2.1
} else{
$("#meldingachternaam").html("");
}
if (gebruikersnaam == ""){
$("#meldinggebruikersnaam").html("Gebruikersnaam invullen."); // functionaliteit 2.1
} else if (gebruikersnaam == "Hekman" || gebruikersnaam == "Koning" || gebruikersnaam == "ErikHekman" || gebruikersnaam == "ThijsWaardenburg" || gebruikersnaam == "Ronald" || gebruikersnaam == "RonaldVanEssen" || gebruikersnaam == "Brendan"){
$("#meldinggebruikersnaam").html("Deze gebruikersnaam is al in gebruik."); // functionaliteit 2.2
} else {
$("#meldinggebruikersnaam").html("");
} 
if (wachtwoord == ""){
$("#meldingwachtwoord").html("Voer een wachtwoord in."); // functionaliteit 2.1
} else {
$("#meldingwachtwoord").html("");
}
if (wachtwoord !== herhalingwachtwoord){
$("#meldingherhalingwachtwoord").html("Uw wachtwoorden komen niet overheen."); // functionaliteit 2.3
} else {
$("#meldingherhalingwachtwoord").html("");
}
//--     deel 2          --
if (geboortedatum == ""){
$("#meldinggeboortedatum").html("Vul geboortedatum in."); // functionaliteit 2.1
} else {
$("#meldinggeboortedatum").html("");
}
if (geboorteplaats == ""){
$("#meldinggeboorteplaats").html("Vul geboorteplaats in."); // functionaliteit 2.1
} else {
$("#meldinggeboorteplaats").html("");
}
if (woonplaats == ""){
$("#meldingwoonplaats").html("Vul woonplaats in."); // functionaliteit 2.1
} else {
$("#meldingwoonplaats").html("");
}
if (intresses == ""){
$("#meldingintresses").html("Vul je favoriete muziekgenres in."); // functionaliteit 2.1
} else {
$("#meldingintresses").html("");
} if (voornaam !== "" && achternaam !== "" && gebruikersnaam !== "" && wachtwoord !== "" && herhalingwachtwoord !== "" && geboortedatum !== "" && geboorteplaats !== "" && woonplaats !== "" && intresses !== ""){
$(location).attr("href","timeline.html"); // functionaliteit 2.6
} 
}); // afsluiting onclick functions
});  // afsluiting document.ready