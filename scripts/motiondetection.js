var deviceorientation = window.addEventListener(
  "deviceorientation",
  handleOrientation,
  false
);
function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;
  console.log("Device Orientation ", absolute, alpha, beta, gamma);
}

if (window.DeviceMotionEvent) {
  console.log("device motion");
  window.addEventListener("devicemotion", motion, false);
} else {
  console.log("DeviceMotionEvent is not supported");
}

function motion(event) {
  // console.log(
  //   "Accelerometer: " +
  //     event.accelerationIncludingGravity.x +
  //     ", " +
  //     event.accelerationIncludingGravity.y +
  //     ", " +
  //     event.accelerationIncludingGravity.z
  // );
}
