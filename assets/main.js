
$(function () {
  $(".rating").show();
  $(".box3").hide();
  $(".box2").on("click", function () {
    $(this).find(".rating").hide();
    $(this).find(".box3").show();
  });
});


$(function () {

  $(".box2").on("click", function () {
    var star = $(this).find(".rating").find("span").html();
    var one = "⭐";
    var two = "⭐⭐";
    var tree = "⭐⭐⭐";

    if (star == tree)
    {
      $(this).find(".box3").addClass("bord3");
      
    }
    else if (star == two)
    {
      $(this).find(".box3").addClass("bord2");
     
    }
    else if (star == one)
    {
      $(this).find(".box3").addClass("bord1");
    }
  });
  
  
});
