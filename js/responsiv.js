$(function (){
    isNavBarHidden = true;
    $('body > header .icons_nav .menu_icon img').click(function (){
        if(isNavBarHidden){
          $('body > header .nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
      else{
          $('body > header .nav_bar').fadeOut("slow");
          isNavBarHidden = true;
      }
   });
});