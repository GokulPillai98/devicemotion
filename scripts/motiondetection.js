var flag = 1;
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
} else {
  console.log("DeviceOrientation is not supported");
}

function handleOrientation(event) {
  if (Math.abs(event.gamma) > 75 && Math.abs(event.gamma) < 90 && flag) {
    if (window.DeviceMotionEvent) {
      $("body").append("<p>Added divce motion listener</p>");
      console.log($("body"))
      window.addEventListener("devicemotion", motion, false);
      flag = 0;
    } else {
      console.log("DeviceMotion is not supported");
    }
  }
}
let moveCounter = 0;
function motion(e) {
  let acc = e.acceleration;

  if (!acc.x) return;

  if (Math.abs(acc.x) >= 5 && Math.abs(acc.y) >= 5) {
    moveCounter++;
    console.log(moveCounter);
    $("body").append('<p>'+moveCounter+'</p>');

    if (moveCounter > 4) {
      $("body").append("<p>brochure is ready</p>");
      window.removeEventListener("devicemotion", motion, false);
      moveCounter = 0;
    }
  }
}
