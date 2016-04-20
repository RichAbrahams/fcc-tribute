$(document).ready(function() {

  var scrollDates = document.querySelectorAll('.movieDate');

  $(window).scroll(function() {
    var winScroll = $(this).scrollTop();
    $(scrollDates).each(function(i, v) {
      var $target = $(this);
      var $window = $(window);
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();
      var targetTop = $target.offset().top;
      var targetBottom = targetTop + $target.height();
      if ((targetBottom <= docViewBottom - 500) && targetTop >= docViewTop) {
        if (i % 2 === 0) {
          $target.css("WebkitAnimationName", "dateLeft");
          $target.css("opacity", "1");
        } else {
          $target.css("WebkitAnimationName", "dateRight");
          $target.css("opacity", "1");
        }
      }
    });
  });

});
