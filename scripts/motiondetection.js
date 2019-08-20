var flag = 1;
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
} else {
  console.log("DeviceOrientation is not supported");
}

function handleOrientation(event) {
  if (Math.abs(event.gamma) > 75 && Math.abs(event.gamma) < 90 && flag) {
    if (window.DeviceMotionEvent) {
      $("body").append("Added divce motion listener");
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
    $("body").append(moveCounter);

    if (moveCounter > 4) {
      $("body").append("brochure is ready");
      window.removeEventListener("devicemotion", motion, false);
      moveCounter = 0;
    }
  }
}
