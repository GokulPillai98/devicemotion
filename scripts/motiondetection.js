var flag = 1;
if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientationEvent supported")
  window.addEventListener("deviceorientation", handleOrientation, false);
} else {
  console.log("DeviceOrientation is not supported");
  $("body").append("<p>DeviceOrientation is not supported</p>");
}

function handleOrientation(event) {
  console.log("Handle orientation");
  if (Math.abs(event.gamma) > 75 && Math.abs(event.gamma) < 90 && flag) {
    if (window.DeviceMotionEvent) {
      $("body").append("<p>Added divce motion listener</p>");
      console.log("DeviceMotionEvent supported")
      window.addEventListener("devicemotion", handleMotion, false);
      flag = 0;
    } else {
      console.log("DeviceMotion is not supported");
      $("body").append("<p>DeviceMotion is not supported</p>");
    }
  }
}
let moveCounter = 0;
function handleMotion(e) {
  console.log("Handle motion")
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
