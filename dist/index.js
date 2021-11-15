
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
window.onload = function initialize() {
  pict2pix.animate({
      image: image1,
      numberOfParticles: 800,
      horizontalSpeed: 1,
      verticalSpeed: -1,
      particleType: 'twisted-particle'
  });
//   pict2pix.animate({
//     image: image2,
//     particleType: 'led-matrix',
//     type: 'random',
//     transitionTime: 2000,
//     idleTime: 3000,
//     ledSize: 4
// });
    // pict2pix.animate({
    //     image: image3,
    //     particleType: 'straight-particle',
    //     numberOfParticles: 800,
    //     horizontalSpeed: -1,
    //     verticalSpeed: -1
    // });
}