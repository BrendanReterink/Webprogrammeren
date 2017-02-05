// lightbox op berichten
$(document).ready(function(){
 
$('.lightbox').click(function(){         // functionaliteit 5.2
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
 
function close_box(){
$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
$('.backdrop, .box').css('display', 'none');
}); // einde function
} // einde close box

}); // einde document ready 

// bericht toevoegen + video

$(document).ready(function() {
$(':file').change(function () {        // functionaliteit 5.1
      if(this.files[0]) {
            var reader = new FileReader();
            reader.onload = videoIsLoaded;
            reader.readAsDataURL(this.files[0]);
        } // afsluiten this.files
    }); // afsluiten function change 

    function videoIsLoaded(e) {
        $('#myVideo').attr('src', e.target.result);
    }; 

$(document).on('click', '#ribbitSubmitBerichten', function(){
var invoer = $('#invoer').val();
//bericht posten
if(invoer == ''){
$(".meldinginvoer2").html("Het invoerveld is leeg of bevat meer dan 140 tekens."); // functionaliteit 5.3
}else{  
if($('#fileInput').val() != ''){
                var video = $('#myVideo').parent().html();
                var uitvoer = '<div class="bericht">' + invoer + "<br>" + video + '</div>';
                $(".meldinginvoer2").html("");
            } else {
                //anders alleen tekst toevoegen aan tijdlijn
                var uitvoer = '<div class="bericht">' + invoer + '</div>';
                 $(".meldinginvoer2").html("");
            }
            $('#timeline').append('<div class="ribbitWrapperrechtss"><img class="avatar" src="images/profielfoto_brendan.jpg"><span class="name">Brendan Reterink zegt</span><span class="time"> 1 minuut geleden</span> <p>'+ invoer +'</p>' + video + '</div>');
            $('#fileInput').val('');
            $('#invoer').val('');
        } // afsluiten else 
}); // onlick afsluiten 

}); // afsluiten document.ready 