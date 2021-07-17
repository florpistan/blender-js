let blenderState = 'off';
const blenderSound = document.querySelector('#blenderSound');
const blenderButton = document.querySelector('#blender-button-sound');
const blender = document.querySelector('#blender');

function controlBlender() {
  if (blenderState === 'off') {
    blenderState = 'on';
    playBlenderSound();
    blender.classList.add('active');
  } else {
    blenderState = 'off';
    playBlenderSound();
    blender.classList.remove('active');
  }
}

function playBlenderSound() {
  if (blenderSound.paused) {
    blenderButton.play();
    blenderSound.play();
  } else {
    blenderButton.play();
    blenderSound.pause();
    blenderSound.currentTime = 0;
  }
}
