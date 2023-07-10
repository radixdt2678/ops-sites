


// Header scrolling sticky Header

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    const headerHeightn = jQuery('#dynamic').outerHeight()
     console.log(headerHeightn);
      $('#dynamic').css("top", `${-headerHeightn}px`);
     $('#nav-top').addClass('nav-top');     
  } else {
     $('#dynamic').css("top","0").removeClass('nav-top');
    $('#nav-top').removeClass('nav-top');    
  }
});



/* Search-bar */
// var btn = document.getElementById("search-btn")
// function search(){
//   btn.click(function() {
//     $('.hidden-menu').slideToggle("slow");
//   });
// }
 $(document).ready(function() {
  $('.show-hidden-menu').click(function() {
    $('.hidden-menu').slideToggle("slow");
  });
}); 




































