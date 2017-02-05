$(document).ready(function(){ 
 //verwijderen van vrienden        // functionaliteit 4.2
$("button#delete1").click(function(){
  $('div.Ffranky').toggle("swing");
});

$("button#delete3").click(function(){
  $('div.Fmaw').toggle("swing");
});

$("button#delete5").click(function(){
  $('div.Fhardwell').toggle("swing");
});

$("button#delete6").click(function(){
  $('div.Fnina').toggle("swing");
});

$("button#delete7").click(function(){
  $('div.Fnastia').toggle("swing");
});

//toevoegen van vrienden         // functionaliteit 4.1
$('button#add1').click(function() {        
  $('div.Prampa').appendTo(".friends");
});

$('button#add2').click(function() {        
  $('div.Psam').appendTo(".friends");
});

}); //afsluiten document ready