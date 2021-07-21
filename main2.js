    
$(document).ready(function(){
    $(".main-container1").css("display", "none");
    $(".main-container1").fadeIn(2000);
});



$(document).ready(function() {
    $("#treeView").kendoTreeView();
});  

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".main2").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

     $(document).ready(function() {
            $("#home-menu").kendoMenu();
        });
       $(document).ready(function() {
            $("#menu").kendoMenu();
        });
        $(document).ready(function() {
            $("#menu2").kendoMenu();
        });
        $(document).ready(function() {
            $("#menu3").kendoMenu();
        });
        $(document).ready(function() {
            $("#menu4").kendoMenu();
        });
        $(document).ready(function() {
          $("#menu5").kendoMenu();
      });