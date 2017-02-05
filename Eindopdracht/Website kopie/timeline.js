$(document).ready(function() {
//bericht plaatsen op timeline
//liken 
$(document).on('click', '.thumbsUp', function(){                  // functionaliteit 3.2
    var kudos = parseInt($(this).siblings('.kudosCount').html());
$(this).siblings('.kudosCount').html(++kudos);
}); 
// niet meer liken
$(document).on('click', '.thumbsDown', function(){ 
var kudos = parseInt($(this).siblings('.kudosCount').html());
$(this).siblings('.kudosCount').html(--kudos);
});
//reactie verwijderen // functionaliteit 3.4
$(document).on('click', '.deleteRibbit', function(){ 
$(this).parent().slideUp('slow', function(){ $(this).remove()});
});
// reactie toevoegen 
$("body").on("click", ".addComment", function(){
var input = $(this).siblings(".inputComment").val();
var comment = "<div class='comment' ><div class='message'>"+input+"</div><div class='commentControl'><a href='#' class='removeComment'>Verwijder reactie</a></div></div>";
$(this).parent().siblings(".comments").append(comment);
}); 

$("body").on("click", "a.removeComment", function(){
$(this).closest('.comment').remove();
});
  });

// lightbox op timeline en berichten      // functionaliteit 3.5
$(document).ready(function(){
 
$('.lightbox').click(function(){
$('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
$('.box').animate({'opacity':'1.00'}, 300, 'linear');
$('.backdrop, .box').css('display', 'block');
});
 
$('.close').click(function(){
close_box();
});
 
$('.backdrop').click(function(){
close_box();
});
 
});
 
function close_box()
{
$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
$('.backdrop, .box').css('display', 'none');
});
}

// afbeelding toevoegen

$(document).ready(function() {
    $(':file').change(function () {       // functionaliteit 3.1
        if(this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
    };
  
    var toevoegen = function(){
        var invoer = $('#ribbitText').val();
//bericht posten
if(invoer == '' || invoer.length > 140){
$(".meldinginvoer").html("Het invoerveld is leeg of bevat meer dan 140 tekens.");  // functionaliteit 3.7
} else {
        var afbeelding = $('#myImg').parent().html();
        var uitvoer = '<div class="ribbitWrapper"><img src="images/profielfoto_brendan.jpg"><span class="name">Brendan Reterink zegt</span><span class="time"> 1 minuut geleden</span> <a class="deleteRibbit" href="#">Verwijder bericht</a><p>'+ invoer +'</p> '+ afbeelding +' <p class="kudosBar"><span class="kudosCount">0</span> mensen vinden dit leuk (<a href="#" class="thumbsUp">Dit vind ik leuk</a> / <a href="#" class="thumbsDown"> Dit vind ik niet leuk</a>)</p> <div class="addComments"> <input type="text" class="inputComment"/> <button class="addComment">Voeg hier uw reactie toe</button></div><div class="comments"><div class="comment"><div class="message"></div><div class="commentControl"><a href="#" class="removeComment"></a></div></div></div></div>';   // functionaliteit 3.3
        $('#timeline').prepend(uitvoer);
        $('#ribbitText').val('');
        $('#fileInput').val('');
        $(".meldinginvoer").html("");
    } // einde else
    } // einde functie toevoegen 

    $('#ribbitSubmit').on('click', function(){
        toevoegen();
    });
    $('#ribbitText').on('keypress', function(event){
        if(event.keyCode == 13){
            toevoegen();
        }
    });
});