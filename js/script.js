
// ready function which specifies a function to load when the webpage's DOM is ready
$(function() {
    // Set the carousel class to 2 seceonds
    $(".carousel").carousel( {interval: 2000} );

    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")){
            // What do I want to do on click? pause and play
            $(".carousel").carousel("pause");
            // Grab the button paused and changed it to play
            $("#carouselButton").children("i").removeClass("fa-pause");
            // change Button to play
            $("#carouselButton").children("i").addClass("fa-play");
    } else {
            // if no acction keep cyclying images 
            $(".carousel").carousel("cycle");
            // Remove class fa play
            $("#carouselButton").children("i").removeClass("fa-play");
            // Add class fa-pause
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

// open modal reserve camp
$(function(){
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show');
    });

     // open modal Loginn 
     $("#loginButton").click(function(){
        $('#loginModal').modal('show'); 
    });
});

