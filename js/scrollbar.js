var mn =  $(".nav");

$(window).scroll(function(){//for scroll function in the browser window
  if ($(this).scrollTop() > 200){
    mn.addClass("main-nav-scrolled");
  }//If it scrolls pass the navigation bar it will add main-nav-scrolledto .nav
  else{
    mn.removeClass("main-nav-scrolled");
  }//when it goes back to the top, it removes this function
});
