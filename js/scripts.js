$(document).ready(function(){

  $("#mycarousel").carousel({ interval:2000 });

  $("#carousbtn").click(function(){

    if($("#carousbtn").children('span').hasClass('fa-pause')){
      $("#mycarousel").carousel('pause');
      $("#carousbtn").children('span').removeClass('fa-pause');
      $("#carousbtn").children('span').addClass('fa-play');
    }
    else if($("#carousbtn").children('span').hasClass('fa-play')){
      $("#mycarousel").carousel('cycle');
      $("#carousbtn").children('span').removeClass('fa-play');
      $("#carousbtn").children('span').addClass('fa-pause');
    }
  });

  $("#loginbtn").click(function(){
    $("#loginModal").modal('show');

  });

  $("#reservetable").click(function(){
    $("#reservemodal").modal('show');
  });



});
