$(window).load(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(window).load(function(){
  $(".pro_img_three img").click(function(){
    var img_src = $(this).attr("src");
    $(".pro_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
  $("#sub_navi_btm img").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});
    