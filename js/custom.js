
function toggleSearch() {
  var searchInput = document.getElementById("search-input");
  searchInput.classList.toggle("show");
}




$(document).ready(function(){
  $(".menu-icon").click(function(){
    $(".main-navigation").toggleClass("main-nav-left");
  });
});

$('#homeBannerslider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    items:1,
    dots:true,
    nav:false,
    autoplay:true
});



$('#homeBannerslider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    items:1,
    nav:false,
    dots:true,
    autoplay:true
    
});

/*Toggle menu*/

$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});
/*End Toggle menu*/
