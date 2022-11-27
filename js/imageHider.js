/* var script = document.createElement('script');
script.src = '../libs/jquery.js';
document.getElementsByTagName('head')[0].appendChild(script); */

document.addEventListener('DOMContentLoaded', function () {
  $(".mobile-tap-area").click(function() {
    $(".toggle-mobile-first").toggle();
    $(".toggle-mobile-second").toggle();
  });
}, false);

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 768) {
    $(".bg-photo").hide();
    $(".hover-indication").hide();
  } else {
    $(".bg-photo").show();
    $(".hover-indication").show();
  }
}, false);

window.addEventListener("resize", resizeEvent);

function resizeEvent() {
  if (window.innerWidth < 728) {
    $(".bg-photo").hide();
    $(".hover-indication").hide();
  } else {
    $(".bg-photo").show();
    $(".hover-indication").show();
  }
};
