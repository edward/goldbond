$("#sweaty a").click(function(e) {
  e.preventDefault();
  $("#sweaty").animate({
    left: 3000
  }, function() { $(this).hide(); });
  $("#dude").animate({
    top: -1000
  });
  $("#goldbond").animate({
    width: 350
  });
  $("form").animate({
    right: 30
  });
});