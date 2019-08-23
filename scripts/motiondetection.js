if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/devicemotion/serviceWorker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
var flag = 1;
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
} else {
  $("body").append("<p>DeviceOrientation is not supported</p>");
}

function handleOrientation(event) {
  if (Math.abs(event.gamma) > 75 && Math.abs(event.gamma) < 90 && flag) {
    if (window.DeviceMotionEvent) {
      $("body").append("<p>Added divce motion listener</p>");
      window.addEventListener("devicemotion", handleMotion, false);
      flag = 0;
    } else {
      $("body").append("<p>DeviceMotion is not supported</p>");
    }
  }
}
let moveCounter = 0;
function handleMotion(e) {
  let acc = e.acceleration;
  if (!acc.x) return;
  if (Math.abs(acc.x) >= 5 && Math.abs(acc.y) >= 5) {
    moveCounter++;
    $("body").append("<p>" + moveCounter + "</p>");
    if (moveCounter > 4) {
      $("body").append("<p>brochure is ready</p>");
      window.removeEventListener("devicemotion", handleMotion, false);
      moveCounter = 0;
    }
  }
}
