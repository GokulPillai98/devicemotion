var flag = 1;
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation, false);
} else {
  console.log("DeviceOrientation is not supported");
}

function handleOrientation(event) {
  if (Math.abs(event.gamma) > 75 && Math.abs(event.gamma) < 90  && flag) {
    if (window.DeviceMotionEvent) {
      console.log("Working", flag)
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

    if (moveCounter > 4) {
      console.log("Device is in motion");
      window.removeEventListener("devicemotion", motion, false);
      moveCounter = 0;
    }
  }
}
