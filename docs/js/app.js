const imagejh = document.getElementById('image-jh1');
const imagejh2 = document.getElementById('image-jh2');

window.onload = function initialize() {
    pict2pix.animate({
        image: imagejh,
        numberOfParticles: 800,
        horizontalSpeed: -1,
        verticalSpeed: -1,
        particleType: 'twisted-particle'
    });
    pict2pix.animate({
        image: imagejh2,
        particleType: 'led-matrix',
        type: 'random',
        speed: 6, 
        transitionTime: 5000
    });
}

const imageay = document.getElementById('image-ay');
const div2 = document.getElementById('div2');

div2.onmouseenter = function over() {
    pict2pix.animate({
        image: imageay,
        numberOfParticles: 800,
        horizontalSpeed: 1,
        verticalSpeed: 1,
        particleType: 'straight-particle'
    });
}

div2.onmouseleave = function out() {
    pict2pix.stop(imageay.id);
}