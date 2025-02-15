// Responsive Navbar Show/hide

$(document).ready(function () {
  $("#bars").click(function () {
    $(".resnav").fadeToggle();
  });
});

// Change image in fade effect
function changeimg() {
  var $act = $(".imgheader .act");
  var $next = $act.next().length > 0 ? $act.next() : $(".imgheader img:first");
  $next.css("z-index", 2);
  $act.fadeOut(1500, function () {
    $act.css("z-index", 1).show().removeClass("act");
    $next.css("z-index", 3).addClass("act");
  });
}

$(document).ready(function () {
  setInterval("changeimg()", 1500);
});
